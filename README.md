# 🥋 Dojo Numérique - Club Judo Lambersart JAK

Plateforme pédagogique interactive pour l'apprentissage du judo. Site web conçu pour aider les élèves à progresser à leur rythme avec des vidéos techniques, des quiz et des informations du club.

## 📋 Fonctionnalités

### Pour les élèves :
- 📹 **Vidéos techniques** organisées par grade de ceinture
- 🎯 **Quiz interactifs** pour tester ses connaissances
- 📢 **Informations du club** (actualités, résultats, agenda)
- 📄 **Documents PDF** à télécharger
- 🥋 Contenu adapté de la ceinture blanche à la ceinture noire

### Pour les professeurs :
- 🔐 **Espace d'administration** sécurisé
- ➕ Ajout facile de vidéos YouTube
- 📝 Gestion des informations du club
- 📤 Upload de documents PDF
- ✏️ Modification du contenu en temps réel

## 🚀 Déploiement

### Option 1 : GitHub Pages
1. Activez GitHub Pages dans les paramètres du dépôt
2. Sélectionnez la branche `main` et le dossier racine
3. Votre site sera accessible à `https://votre-username.github.io/dojo-numerique/`

### Option 2 : Hébergement local
1. Ouvrez `index.html` dans un navigateur
2. Utilisez un serveur local (ex: Live Server pour VS Code)

## 🔐 Accès Administration

**Mot de passe par défaut :** `Hadjime@2026`

⚠️ **Important :** Pour changer le mot de passe, modifiez la ligne 13 du fichier `auth.js`

```javascript
verifyPassword(password) {
  return password === "VotreNouveauMotDePasse";
}
```

## 💾 Stockage des données

Les données sont stockées localement dans le navigateur via `localStorage` :
- Vidéos ajoutées
- Informations du club
- Documents PDF (encodés en base64)

**Note :** Les données sont propres à chaque navigateur. Pour partager les données entre appareils, exportez/importez manuellement ou utilisez une base de données externe.

## 🛠️ Technologies utilisées

- HTML5 / CSS3
- JavaScript vanilla (pas de framework)
- LocalStorage API pour la persistance des données
- Design responsive (mobile-friendly)

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (versions récentes)
- ✅ Responsive : fonctionne sur mobile, tablette et ordinateur
- ✅ Fonctionne hors ligne une fois chargé

## 📂 Structure du projet

```
dojo_test 2/
├── index.html              # Page d'accueil
├── admin.html              # Interface d'administration
├── quiz.html               # Quiz pédagogique
├── informations.html       # Infos et actualités du club
├── videos-par-grade.html   # Sélection du grade
├── videos-*.html           # Pages vidéos par grade
├── auth.js                 # Système d'authentification
├── styles/
│   └── style.css          # Feuille de styles
├── images/                # Images du site
├── favicon files          # Icônes du site
└── *.webmanifest          # Manifeste PWA
```

## 👥 Contribution

Site développé pour le Club Judo Lambersart JAK.

## 📝 Licence

Ce projet est destiné à un usage pédagogique pour le club de judo.

## 🆘 Support

Pour toute question ou problème :
- Contactez les responsables du dojo
- Consultez les fichiers de documentation dans le dossier racine

---

**Version :** 1.0  
**Dernière mise à jour :** Décembre 2024  
🥋 **OSS !** (Salut respectueux en judo)
