"use client"

import Link from "next/link"
import { Package2 } from "lucide-react"


export const description =
  "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings."

export function BrandLink({displayName, className}) {
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
