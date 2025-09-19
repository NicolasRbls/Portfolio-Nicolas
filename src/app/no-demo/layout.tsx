import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Démo en développement - Nicolas",
  description: "Cette démonstration est actuellement en cours de développement",
}

export default function NoDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
