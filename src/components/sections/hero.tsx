"use client"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/content/site"

export function Hero() {

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = site.cvUrl
    link.download = "CV de Nicolas Robles.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContact = () => {
    window.location.href = `mailto:${site.email}`
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container-width section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bonjour, je suis <span className="gradient-text">Nicolas</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {site.role}
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {site.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
          <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={handleContact}
            > 
            <Mail className="mr-2 h-4 w-4" />
              Me contacter
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownloadCV}>
              <Download className="mr-2 h-4 w-4" />
              Télécharger CV
            </Button>

            <motion.div
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
