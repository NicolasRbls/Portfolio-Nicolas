"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"


const nav = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container-width section-padding py-4 flex items-center justify-between">
        <Link href="/" className="font-playfair text-xl font-bold gradient-text">
          Nicolas
        </Link>

        {/* Desktop Navigation */}

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                href={item.href}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <ThemeToggle />
        </ul>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0" aria-label="Ouvrir le menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="text-center">
                  <h2 className="font-playfair text-2xl font-bold gradient-text">Nicolas</h2>
                  <p className="text-sm text-muted-foreground mt-2">Développeur Full Stack</p>
                </div>

                <nav className="flex flex-col gap-4">
                  {nav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors duration-200 text-base font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </motion.header>
  )
}
