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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "../authProvider"
import { NavLinks, NonUserLinks } from "./NavLinks"
import { BrandLink } from "./BrandLink"
import MobileNavbar from "./MobileNavbar"
import AccountDropdown from "./AccountDropdown"

export const description =
  "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings."



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
            key={`nav-links-a-${idx}`}
            href={navLinkItem.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {navLinkItem.label}
          </Link>
          })}
          
         
        </nav>
        <MobileNavbar/>
        <div className="md:hidden">
            <BrandLink displayName={true}/>

        </div>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          { auth.isAuthenticated ? 
          <div className="ml-auto">
          <AccountDropdown/>
          </div>
            : <> 
            {NonUserLinks.map((navLinkItem, idx) => {
                const shouldHide = !auth.isAuthenticated && navLinkItem.authRequired
                return shouldHide ? null : <Link
                key={`nav-links-d-${idx}`}
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