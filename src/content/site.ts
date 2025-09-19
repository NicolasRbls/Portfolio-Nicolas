import type { SiteData } from "@/types/site"

export const site: SiteData = {
  name: "Nicolas",
  role: "Développeur DFS / Admin Système",
  location: "France , Corse , Bastia",
  tagline: "Concevoir des solutions fiables et optimisées, du développement applicatif à l’administration système",
  bio: "Passionné par les nouvelles tendances numériques ; je conçois des solutions web et scripts robustes (Python, Java, JavaScript/HTML-CSS, PHP, SQL, Bash) et je transforme les idées en projets concrets avec rigueur, créativité et esprit d’équipe.\n\nJ’ai également une solide expérience en administration système (Linux/Windows, virtualisation, Docker, cloud), ce qui me permet de gérer et sécuriser des environnements serveurs complets.",
  cvUrl: "/CV de Nicolas Robles.pdf",
  email: "nicolasalexrobles@gmail.com",
  phone: "+33 6 51 72 16 29",
  about : "Découvrez mon parcours et ma passion pour le développement et l'administration système.",
  pdp : "/professional-portrait.jpg",
  projects: [
    {
      title: "E-commerce Platform",
      description: "Plateforme e-commerce moderne avec panier, paiements et gestion des commandes",
      image: "/modern-ecommerce-interface.png",
      stack: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      demo: "https://demo.example.com",
      repo: "https://github.com/username/project1",
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard d'analytics avec graphiques interactifs et données en temps réel",
      image: "/analytics-dashboard.png",
      stack: ["React", "D3.js", "Node.js", "MongoDB"],
      demo: "https://demo2.example.com",
      repo: "https://github.com/username/project2",
    },
  ],
  skills: [
  // 🖥️ Développement Frontend
  { name: "React", level: 50, category: "frontend" },
  { name: "Next.js", level: 60, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },

  // ⚙️ Développement Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Express.js", level: 95, category: "backend" },

  // 📊 Algorithmique & Data
  { name: "Python", level: 100, category: "algorithmique" },
  { name: "Java", level: 90, category: "algorithmique" },
  { name: "SQL", level: 80, category: "algorithmique" },

  // 🔧 Outils & DevOps
  { name: "Git", level: 85, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "Linux", level: 85, category: "tools" },
  { name: "Windows Server", level: 30, category: "tools" },
  { name: "Bash", level: 80, category: "tools" },

  // ☁️ Cloud & Virtualisation
  { name: "Oracle Cloud", level: 70, category: "cloud" },
  { name: "Virtualisation (VMware/VirtualBox)", level: 75, category: "cloud" },
],

}
