"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container-width section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-xl font-bold gradient-text mb-2">Nicolas</h3>
            <p className="text-muted-foreground text-sm">
              Développeur / Admin Système passionné par l'innovation et l'excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/NicolasRbls"
              className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              Fait en {new Date().getFullYear()}
            </p>
            <p className="text-muted-foreground text-xs mt-1">Next.js • Tailwind CSS • Framer Motion</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
