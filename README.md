# 🚀 Portfolio Nicolas - Développeur Front-End

Un portfolio moderne et élégant construit avec Next.js 14, TypeScript et Tailwind CSS, mettant en valeur mes compétences en développement front-end et mes projets.

[![Status](https://img.shields.io/badge/Status-Live-brightgreen)](https://portfolio-nicolas-robles.netlify.app/)       
![Next.js](https://img.shields.io/badge/Next.js-14.2.25-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-38bdf8)

## ✨ Fonctionnalités

- **Design Moderne** : Interface élégante avec animations fluides et effets visuels
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Mode Sombre/Clair** : Basculement automatique selon les préférences système
- **Animations** : Transitions et animations avec Framer Motion
- **Formulaire de Contact** : Système de contact fonctionnel avec validation
- **Téléchargement CV** : Bouton de téléchargement direct du CV
- **SEO Optimisé** : Métadonnées et structure optimisées pour les moteurs de recherche
- **Analytics** : Intégration Vercel Analytics pour le suivi des performances

## 🛠️ Technologies Utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour une meilleure robustesse
- **Tailwind CSS 4** - Framework CSS utilitaire moderne
- **Framer Motion** - Animations et transitions fluides
- **React Hook Form** - Gestion des formulaires avec validation
- **Zod** - Validation de schémas TypeScript

### UI/UX
- **Radix UI** - Composants accessibles et personnalisables
- **Lucide React** - Icônes modernes et cohérentes
- **Next Themes** - Gestion du mode sombre/clair
- **Sonner** - Notifications toast élégantes

### Outils de Développement
- **ESLint** - Linting du code
- **Prettier** - Formatage automatique du code
- **PostCSS** - Traitement CSS avancé
- **Autoprefixer** - Préfixes CSS automatiques

## 📁 Structure du Projet

```bash
portfolio-nicolas/
├── app/                    # App Router Next.js
│   ├── globals.css         # Styles globaux et variables CSS
│   ├── layout.tsx          # Layout principal avec fonts
│   └── page.tsx            # Page d'accueil
├── components/             # Composants React
│   ├── layout/             # Composants de mise en page
│   │   └── navbar.tsx      # Navigation principale
│   ├── sections/           # Sections du portfolio
│   │   ├── hero.tsx        # Section héro avec présentation
│   │   ├── about.tsx       # Section à propos
│   │   ├── projects.tsx    # Galerie de projets
│   │   ├── skills.tsx      # Compétences techniques
│   │   ├── contact.tsx     # Formulaire de contact
│   │   └── footer.tsx      # Pied de page
│   ├── theme/              # Gestion des thèmes
│   │   └── theme-provider.tsx
│   └── ui/                 # Composants UI réutilisables
├── src/
│   ├── content/            # Données du site
│   │   └── site.ts         # Configuration et contenu
│   └── types/              # Types TypeScript
│       └── site.ts         # Types pour les données
├── public/                 # Assets statiques
│   ├── CV de Nicolas Robles.pdf
│   ├── modern-ecommerce-interface.png
│   └── analytics-dashboard.png
├── hooks/                  # Hooks React personnalisés
├── lib/                    # Utilitaires et helpers
└── styles/                 # Styles additionnels
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm, yarn ou pnpm

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/username/portfolio-nicolas.git
cd portfolio-nicolas
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Ouvrir dans le navigateur**
```bash
http://localhost:3000
```

## 📝 Configuration

### Personnalisation du Contenu

Modifiez le fichier `src/content/site.ts` pour personnaliser :
- Informations personnelles (nom, rôle, localisation)
- Projets et réalisations
- Compétences techniques
- Informations de contact

```typescript
export const site: SiteData = {
  name: "Votre Nom",
  role: "Votre Rôle",
  email: "votre@email.com",
  // ... autres configurations
}
```

### Ajout de Projets

Pour ajouter un nouveau projet, ajoutez un objet dans le tableau `projects` dans le fichier `src/content/site.ts` :

```typescript
{
  title: "Nom du Projet",
  description: "Description du projet",
  image: "/chemin-vers-image.png",
  stack: ["Tech1", "Tech2", "Tech3"],
  demo: "https://demo-url.com",
  repo: "https://github.com/username/repo",
}
```

### Personnalisation des Couleurs

Les couleurs sont définies dans `app/globals.css` avec des variables CSS personnalisées :

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... autres variables */
}
```

## 📱 Sections du Portfolio

### 🏠 Hero Section
- Présentation personnelle avec animation de frappe
- Boutons d'action (Contact, Télécharger CV)
- Animation de flèche directionnelle

### 👤 À Propos
- Biographie personnelle
- Valeurs et approche professionnelle

### 💼 Projets
- Galerie de projets avec images
- Technologies utilisées
- Liens vers démos et repositories

### 🛠️ Compétences
- Barres de progression animées
- Catégorisation par domaine
- Niveaux de maîtrise visuels

### 📞 Contact
- Formulaire de contact fonctionnel
- Informations de contact directes
- Validation des champs en temps réel

## 🎨 Personnalisation du Design

### Fonts
Le projet utilise deux polices Google Fonts :
- **Playfair Display** : Titres et éléments décoratifs
- **Source Sans 3** : Texte principal et interface

### Animations
Les animations sont gérées par Framer Motion avec :
- Animations d'entrée en scroll
- Transitions fluides entre états
- Effets hover interactifs

### Responsive Design
- Mobile-first approach
- Breakpoints Tailwind CSS standards
- Optimisation pour tous les écrans

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connecter le repository à Vercel
2. Déploiement automatique à chaque push
3. Analytics intégrées

### Autres Plateformes
```bash
# Build de production
npm run build

# Démarrage en production
npm run start
```

## 📊 Performance et SEO

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisé pour les métriques Google
- **SEO** : Métadonnées complètes et structure sémantique
- **Accessibilité** : Composants Radix UI conformes WCAG

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

⭐ **N'hésitez pas à mettre une étoile si ce projet vous a plu !**
