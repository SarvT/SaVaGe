"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "../components/mode-toggle"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SVG Wizard
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <Button variant={pathname === "/" ? "default" : "ghost"}>Home</Button>
              </Link>
            </li>
            <li>
              <Link href="/editor" passHref>
                <Button variant={pathname === "/editor" ? "default" : "ghost"}>Editor</Button>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <Button variant={pathname === "/about" ? "default" : "ghost"}>About</Button>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <Button variant={pathname === "/contact" ? "default" : "ghost"}>Contact</Button>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

