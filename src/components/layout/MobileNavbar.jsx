"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "../authProvider"
import { NavLinks, NonUserLinks } from "./NavLinks"
import { BrandLink } from "./BrandLink"

export const description =
  "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings."



export default function MobileNavbar({className}) {
    const auth = useAuth()
    return (
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
            key={`nav-links-b-${idx}`}
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
                    key={`nav-links-c-${idx}`}
                    href={navLinkItem.href}
                    className="text-muted-foreground hover:text-foreground">
                {navLinkItem.label}
            </Link>
            })}
                </>}
            </nav>
          </SheetContent>
        </Sheet>
    )
    
}