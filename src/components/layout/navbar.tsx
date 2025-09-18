"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme/theme-toggle"

const nav = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
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
      </nav>
    </motion.header>
  )
}
