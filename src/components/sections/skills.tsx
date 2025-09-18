"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { site } from "@/content/site";
import { Skill } from "@/types/site";

export function Skills() {
  const skills: Skill[] = site.skills;
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des expériences exceptionnelles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="glass">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-card-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
