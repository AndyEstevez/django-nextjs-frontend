"use client"

import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "../authProvider"
import { NavLinks, NonUserLinks } from "./NavLinks"

export const description =
  "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings."

function BrandLink({displayName, className}) {
    const finalClass = className ? className : "flex items-center gap-2 text-lg font-semibold md:text-base"
    return <Link
    href="#"
    className={finalClass}
  >
    <Package2 className="h-6 w-6" />
    {displayName ? 
        <span>SaaS</span>
        :
        <span className="sr-only">SaaS</span>
    }
  </Link>
}

export default function Navbar({className}) {
    const finalClass = className ? className : "sticky top-0"
    const auth = useAuth()
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <BrandLink displayName={true}/>
          {NavLinks.map((navLinkItem, idx) => {
            const shouldHide = !auth.isAuthenticated && navLinkItem.authRequired
            return shouldHide ? null : <Link
            href={navLinkItem.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {navLinkItem.label}
          </Link>
          })}
          
         
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
            <BrandLink displayName={true}/>
          {NavLinks.map((navLinkItem, idx) => {
            const shouldHide = !auth.isAuthenticated && navLinkItem.authRequired
            return shouldHide ? null : <Link
            href={navLinkItem.href}
            className="text-muted-foreground hover:text-foreground"
          >
            {navLinkItem.label}
          </Link>
          })}
              
             
              { auth.isAuthenticated ?
              <Link href="/logout" className="hover:text-foreground">
                Logout
              </Link>
                : <>
                {NonUserLinks.map((navLinkItem, idx) => {
                    const shouldHide = !auth.isAuthenticated && navLinkItem.authRequired
                    return shouldHide ? null : <Link
                    href={navLinkItem.href}
                    className="text-muted-foreground hover:text-foreground">
                {navLinkItem.label}
            </Link>
            })}
                </>}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="md:hidden">
            <BrandLink displayName={true}/>

        </div>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          { auth.isAuthenticated ? 
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            : <> 
            {NonUserLinks.map((navLinkItem, idx) => {
                const shouldHide = !auth.isAuthenticated && navLinkItem.authRequired
                return shouldHide ? null : <Link
                href={navLinkItem.href}
                className="text-muted-foreground transition-colors hover:text-foreground">
            {navLinkItem.label}
          </Link>
          })}
          </>}
        </div>
      </header>
    )
    
}