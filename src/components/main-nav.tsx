"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";

export function MainNav() {
  const pathname = usePathname();
  const clearPathname = pathname.split("/").splice(2).join();

  return (
    <div className="mr-4 hidden md:flex w-full">
      {/* <Logo className="h-6 w-6" /> */}
      <Link href="/" className="ml-2 mr-6 flex items-center space-x-2">
        <img src="/img/logo-uppercase.png" alt="logo" className="w-16" />
      </Link>
      <nav className="flex items-center gap-6 text-sm ml-auto">
          <a
            href={`/de/${clearPathname}`}
          >de</a> | <a
            href={`/en/${clearPathname}`}
          >en</a>
        {/* <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Themes
        </Link>
        <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link>
        <Link
          href={siteConfig.links.twitter}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  );
}
