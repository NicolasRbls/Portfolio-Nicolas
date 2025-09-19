"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Code, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NoDemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
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
          className="max-w-2xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto glass rounded-full flex items-center justify-center">
              <Wrench className="h-12 w-12 text-muted-foreground" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="gradient-text">Démo en cours</span>
            <br />
            de creation !
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            La démonstration sera bientôt disponible !
          </motion.p>

          {/* Features list */}
          <motion.div
            className="glass p-6 rounded-lg mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="font-playfair text-xl font-semibold mb-4 text-center">
              En attendant, voici les caractéristiques du portfolio :
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Code className="h-5 w-5 text-secondary" />
                Interface moderne et responsive
              </li>
              <li className="flex items-center gap-3">
                <Code className="h-5 w-5 text-secondary" />
                Expérience utilisateur optimisée
              </li>
              <li className="flex items-center gap-3">
                <Code className="h-5 w-5 text-secondary" />
                Technologies avancées (Next.js, Tailwind CSS, Framer Motion)
              </li>
              <li className="flex items-center gap-3">
                <Code className="h-5 w-5 text-secondary" />
                Projets et compétences détaillés
              </li>
              <li className="flex items-center gap-3">
                <Code className="h-5 w-5 text-secondary" />
                Contact facile via email ou téléphone
              </li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au portfolio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
