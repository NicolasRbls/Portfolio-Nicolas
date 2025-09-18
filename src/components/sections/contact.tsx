"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { site } from "@/content/site"
import type React from "react"

export function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const subject = encodeURIComponent(formData.subject || "Contact depuis le portfolio")
      const body = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:${site.email}?subject=${subject}&body=${body}`

      window.location.href = mailtoLink

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prêt à répondre à toutes vos questions !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold mb-6 gradient-text">Envoyez-moi un message</h3>
                <form onSubmit={handleSubmit}  className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        className="bg-input border-border"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Votre email"
                        className="bg-input border-border"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Sujet"
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Votre message..."
                      rows={6}
                      className="bg-input border-border resize-none"
                      required
                    />
                  </div>
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-sm">
                      Votre client email va s'ouvrir avec le message pré-rempli !
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-sm">Une erreur s'est produite. Veuillez réessayer.</p>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                  <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Envoi..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="glass">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center border border-secondary/20">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">{site.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center border border-secondary/20">
                    <Phone className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-muted-foreground">{site.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center border border-secondary/20">
                    <MapPin className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">Localisation</h4>
                    <p className="text-muted-foreground">{site.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="p-6">
                <h4 className="font-medium mb-4">Disponibilité</h4>
                <p className="text-muted-foreground text-sm">
                  Actuellement disponible !
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
