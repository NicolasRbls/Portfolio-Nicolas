"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { site } from "@/content/site"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">À propos de moi</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {site.about}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold mb-6 gradient-text">Mon Histoire</h3>
                <div className="space-y-4 text-card-foreground whitespace-pre-line">
                  <p>{site.bio}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-2xl blur-2xl opacity-20 scale-110" />
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-card shadow-2xl">
                <Image
                  src={site.pdp}
                  alt="Nicolas - Développeur / Admin Système"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
