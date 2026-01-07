# Fresh Rescue - Application Mobile Anti-Gaspillage

## Description

Fresh Rescue est une application mobile innovante de lutte contre le gaspillage alimentaire, permettant aux utilisateurs d'acheter des produits proches de leur date de peremption a prix reduits aupres des magasins HyperFresh.

## Fonctionnalites Principales

### Pour les Utilisateurs

- **Catalogue de Produits** : Parcourir les produits disponibles par categorie (Fruits, Legumes, Boulangerie, etc.)
- **Flash Sales** : Offres eclair avec reductions jusqu'a -70%
- **QR Code** : Scanner ou presenter son QR code pour recuperer les commandes en magasin
- **Panier** : Gestion du panier d'achat avec calcul automatique des economies
- **Geolocalisation** : Trouver les magasins HyperFresh a proximite

### Systeme de Gamification "Impact Score"

#### Points Rescue
- 1 EUR depense = 1 point
- Serie de 7 jours consecutifs = bonus x2 (1 EUR = 2 points)
- Parrainage d'un ami = 20 points (max 5 par saison, apres validation numero + 1 achat)
- Partage sur reseaux sociaux = 10 points (1 fois par saison)

#### Niveaux et Recompenses
| Niveau | Points | Recompense |
|--------|--------|------------|
| Rookie | 0-100 | Bons d'achat valables sur tout le magasin |
| Hero | 100-350 | 25% de reduction sur tous les paniers |
| Legend | 350-600 | 75% de reduction sur 3 paniers (par saison) |
| Planet Saver | 600+ | 1 panier gratuit (10 EUR max) a reclamer (par saison) |

> **Note** : Remise a zero tous les 3 mois (1 saison = 3 mois)

#### Dashboard Impact
- Kg de CO2 economises
- Repas sauves
- Badges collectionnables ("Warrior du mercredi", "Roi du fromage", etc.)

### Abonnement Fresh+ Premium
- **Prix** : 4,99 EUR/mois
- **Avantages** :
  - -15% sur tous les paniers
  - Acces VIP aux offres anticipees
  - Double points Rescue

## Stack Technique

- **Frontend** : Next.js 14 (App Router), React 18, TypeScript
- **Styling** : Tailwind CSS, shadcn/ui
- **Icons** : Lucide React
- **State Management** : React Hooks (useState, useEffect)

## Structure du Projet

```
app/
├── layout.tsx          # Layout principal
├── page.tsx            # Page d'accueil / Navigation principale
├── globals.css         # Styles globaux et design tokens
components/
├── dashboard-header.tsx      # Header avec logo, notifications, panier
├── bottom-nav.tsx            # Navigation inferieure persistante
├── premium-banner.tsx        # Banner Fresh+ Premium
├── impact-score.tsx          # Section Impact Score et gamification
├── gamification-section.tsx  # Badges et niveaux
├── flash-sales.tsx           # Offres Flash
├── available-baskets.tsx     # Paniers disponibles
├── catalog-page.tsx          # Page catalogue
├── cart-page.tsx             # Page panier
├── scanner-page.tsx          # Page scanner/QR code
├── profile-page.tsx          # Page profil utilisateur
├── notifications-popup.tsx   # Popup notifications
├── fresh-rescue-logo.tsx     # Logo SVG de l'application
└── ...
```

## Installation

```bash
# Cloner le repository
git clone https://github.com/your-org/fresh-rescue.git

# Installer les dependances
npm install

# Lancer en developpement
npm run dev

# Build production
npm run build
```

## Variables d'Environnement

Voir le fichier `.env.example` pour les variables requises :

```env
NEXT_PUBLIC_API_URL=https://api.freshrescue.com
NEXT_PUBLIC_MAPS_API_KEY=your_maps_api_key
DATABASE_URL=postgresql://...
```

## Licence

MIT License - Fresh Rescue 2025
