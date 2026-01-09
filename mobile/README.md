# Fresh Rescue Mobile

Application mobile Fresh Rescue développée avec React Native et Expo.

## 📱 Fonctionnalités

- **Accueil** : Découvrez les paniers disponibles près de chez vous
- **Catalogue** : Parcourez tous les produits anti-gaspi disponibles
- **Scanner QR** : Scannez votre QR code de commande en magasin
- **Panier** : Gérez vos réservations
- **Profil** : Suivez votre impact écologique et gérez votre compte

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ installé
- npm ou yarn
- Expo Go app sur votre téléphone (disponible sur App Store et Google Play)

### Installation

1. Naviguez vers le dossier mobile :
```bash
cd mobile
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez l'application :
```bash
npm start
```

4. Scannez le QR code avec Expo Go sur votre téléphone

## 📦 Scripts disponibles

- `npm start` - Démarre le serveur de développement Expo
- `npm run android` - Lance l'application sur un émulateur/appareil Android
- `npm run ios` - Lance l'application sur un simulateur/appareil iOS (Mac uniquement)
- `npm run web` - Lance l'application dans le navigateur
- `npm run lint` - Vérifie le code avec ESLint

## 🏗️ Structure du projet

```
mobile/
├── app/                    # Routes et écrans
│   ├── (tabs)/            # Navigation par onglets
│   │   ├── index.tsx      # Écran d'accueil
│   │   ├── catalog.tsx    # Catalogue de produits
│   │   ├── scanner.tsx    # Scanner QR code
│   │   ├── cart.tsx       # Panier
│   │   ├── profile.tsx    # Profil utilisateur
│   │   └── _layout.tsx    # Layout des onglets
│   └── _layout.tsx        # Layout racine
├── assets/                # Images et ressources
├── components/            # Composants réutilisables
├── constants/             # Constantes (thème, etc.)
├── hooks/                 # Hooks personnalisés
└── app.json              # Configuration Expo
```

## 🎨 Thème et couleurs

L'application utilise une palette de couleurs cohérente :

- **Primaire** : `#16a34a` (Vert Fresh Rescue)
- **Secondaire** : `#f97316` (Orange)
- **Accent** : `#f59e0b` (Jaune)
- **Fond** : `#f8fafc` (Gris clair)
- **Texte** : `#0f172a` (Gris foncé)

## 📱 Dépendances principales

- **expo** : Framework pour React Native
- **expo-router** : Routing basé sur les fichiers
- **expo-camera** : Accès à la caméra pour scanner les QR codes
- **expo-location** : Géolocalisation pour trouver les paniers à proximité
- **@expo/vector-icons** : Bibliothèque d'icônes
- **react-native-svg** : Support des SVG

## 🔧 Configuration

### Permissions

L'application demande les permissions suivantes :

- **Caméra** : Pour scanner les QR codes en magasin
- **Localisation** : Pour trouver les paniers disponibles près de vous

Ces permissions sont configurées dans `app.json`.

### Personnalisation

Pour personnaliser l'application :

1. **Couleurs** : Modifiez les couleurs dans `constants/theme.ts`
2. **Logo** : Remplacez les images dans `assets/images/`
3. **Configuration** : Éditez `app.json` pour changer le nom, le slug, etc.

## 📝 Développement

### Mode développement

Le mode Fast Refresh est activé par défaut, permettant de voir les modifications en temps réel.

### Debugging

- Secouez votre appareil pour ouvrir le menu développeur
- Appuyez sur `d` dans le terminal pour ouvrir les outils de développement

## 🚀 Déploiement

### Build de production

Pour créer un build de production :

```bash
# Android
eas build --platform android

# iOS
eas build --platform ios
```

Note : Vous devez avoir un compte Expo et EAS CLI installé.

## 🐛 Résolution des problèmes

### L'application ne se lance pas

1. Vérifiez que vous êtes dans le dossier `mobile`
2. Supprimez le dossier `node_modules` et `package-lock.json`
3. Réinstallez les dépendances : `npm install`
4. Nettoyez le cache : `expo start -c`

### Problèmes de permissions

Sur Android, assurez-vous d'avoir accepté les permissions de caméra et de localisation dans les paramètres de l'application.

## 📚 Ressources

- [Documentation Expo](https://docs.expo.dev/)
- [Documentation React Native](https://reactnative.dev/)
- [Documentation Expo Router](https://expo.github.io/router/)

## 🤝 Contribution

Pour contribuer au projet :

1. Créez une branche pour votre fonctionnalité
2. Committez vos changements
3. Pushez vers la branche
4. Créez une Pull Request

## 📄 Licence

Ce projet est sous licence privée.
