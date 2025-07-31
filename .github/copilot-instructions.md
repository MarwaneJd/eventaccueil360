<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Event Accueil 360 - Projet Instructions

Ce projet est un site web one-page pour Event Accueil 360, une entreprise d'impression textile située à Rabat, Maroc.

## Stack Technique
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Language**: JavaScript (pas TypeScript)
- **Langue du contenu**: Français

## Structure du Projet
```
src/
├── components/
│   ├── Navbar.jsx       # Navigation fixe avec menu mobile
│   ├── Hero.jsx         # Section héro avec CTA
│   ├── Services.jsx     # Services d'impression
│   ├── Produits.jsx     # Gamme de produits
│   ├── Localisation.jsx # Localisation et contact
│   └── Footer.jsx       # Footer avec liens sociaux
├── App.jsx             # Composant principal
├── main.jsx           # Point d'entrée
└── index.css          # Styles Tailwind + custom
```

## Informations Business
- **Nom**: Event Accueil 360
- **Spécialité**: Impression textile haute qualité
- **USP**: Impression en 5 minutes, matériaux 95% coton - 5% Lycra
- **Adresse**: 15 Résidence KAYS PLACE, Ala Adaouiya, Agdal, Rabat
- **Téléphones**: +212 7 73 72 10 10, +212 5 37 68 09 89

## Guidelines de Développement
1. **Responsive First**: Toujours commencer par mobile, puis desktop
2. **Accessibilité**: Utiliser des balises sémantiques, alt texts, aria-labels
3. **Performance**: Optimiser les images, lazy loading si nécessaire
4. **SEO**: Meta tags appropriés, structure HTML sémantique
5. **Français**: Tout le contenu doit être en français
6. **Design**: Style moderne, clean, couleurs bleues/grises/blanches
7. **Animations**: Subtiles, améliorer l'UX sans surcharger

## Classes Tailwind Personnalisées
- `.btn-primary`: Bouton principal bleu
- `.btn-secondary`: Bouton secondaire gris
- `.section-padding`: Padding standard des sections
- `.container-max`: Container avec max-width

## Sections du Site
1. **Navbar**: Navigation fixe avec logo EA 360
2. **Hero**: Titre principal + CTA + image T-shirt
3. **Services**: 3 services principaux en cards
4. **Produits**: Gamme de produits avec prix
5. **Localisation**: Map + infos contact
6. **Footer**: Logo + liens + réseaux sociaux

Quand tu génères du code pour ce projet, assure-toi de respecter ces guidelines et le style existant.
