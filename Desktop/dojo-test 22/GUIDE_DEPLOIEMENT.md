# 🚀 GUIDE COMPLET DE DÉPLOIEMENT
## Site Dojo Numérique - Club Judo Lambersart JAK

---

## 📋 CHECKLIST AVANT DÉPLOIEMENT

### ✅ Fichiers corrigés et créés :
- [x] auth.js déplacé à la racine
- [x] robots.txt créé
- [x] sitemap.xml créé  
- [x] .htaccess créé (pour Apache)
- [x] manifest.json créé (PWA)
- [x] Balises meta SEO ajoutées

---

## 🎯 OPTIONS DE DÉPLOIEMENT

### **OPTION 1 : Hébergement Gratuit - GitHub Pages** ⭐ RECOMMANDÉ POUR DÉBUTER

**Avantages :**
- Totalement gratuit
- Facile à mettre en place
- HTTPS automatique
- Parfait pour un site statique

**Étapes :**

1. **Créer un compte GitHub** (si pas déjà fait)
   - Aller sur https://github.com
   - S'inscrire gratuitement

2. **Créer un repository**
   - Cliquer sur "New repository"
   - Nom : `dojo-lambersart` (ou autre)
   - Public
   - Créer le repository

3. **Uploader les fichiers**
   - Glisser-déposer tous les fichiers du dossier `dojo_test 2`
   - SAUF : le dossier `auth-secure` et `node_modules`

4. **Activer GitHub Pages**
   - Aller dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : main / root
   - Save

5. **Votre site sera accessible à :**
   `https://votre-username.github.io/dojo-lambersart/`

---

### **OPTION 2 : Hébergement Français - O2Switch** 💶 PROFESSIONNEL

**Prix :** ~5-7€/mois (avec nom de domaine inclus)

**Avantages :**
- Support en français
- Performance optimale en France
- Email professionnel inclus
- Certificat SSL gratuit

**Étapes :**

1. **Acheter l'hébergement**
   - Aller sur https://www.o2switch.fr
   - Choisir l'offre unique (tout illimité)
   - Enregistrer un nom de domaine : `judolambersart.fr` ou similaire

2. **Accéder au cPanel**
   - Connexion avec identifiants reçus par email

3. **Upload via FileZilla (FTP)**
   - Télécharger FileZilla : https://filezilla-project.org
   - Hôte : ftp.votre-domaine.fr
   - Identifiant : fourni par O2Switch
   - Port : 21
   - Uploader tous les fichiers dans `/public_html/`

4. **Configurer SSL (HTTPS)**
   - Dans cPanel > SSL/TLS Status
   - Activer AutoSSL

---

### **OPTION 3 : Netlify** 🆓 SIMPLE ET RAPIDE

**Avantages :**
- Gratuit avec nom de domaine Netlify
- Déploiement automatique
- CDN mondial
- Certificat SSL automatique

**Étapes :**

1. **Créer un compte Netlify**
   - https://www.netlify.com
   - S'inscrire avec GitHub ou email

2. **Déployer le site**
   - "Add new site" > "Deploy manually"
   - Glisser-déposer le dossier `dojo_test 2`
   - Attendre 30 secondes

3. **Votre site est en ligne !**
   - URL : `https://nom-aleatoire.netlify.app`
   - Vous pouvez changer le nom dans Site settings

4. **Ajouter un domaine personnalisé** (optionnel)
   - Domain settings > Add custom domain
   - Suivre les instructions DNS

---

## 🔧 OPTIMISATIONS POST-DÉPLOIEMENT

### 1. **Images à optimiser**

Compresser vos images pour accélérer le chargement :
- Aller sur https://tinypng.com
- Uploader toutes vos images
- Remplacer les originales par les versions compressées

### 2. **Configurer Google Search Console**

Pour le référencement Google :

1. Aller sur https://search.google.com/search-console
2. Ajouter votre site
3. Vérifier la propriété (méthode HTML file recommandée)
4. Soumettre le sitemap : `https://votre-site.com/sitemap.xml`

### 3. **Tester les performances**

- PageSpeed Insights : https://pagespeed.web.dev
- GTmetrix : https://gtmetrix.com
- Objectif : Score > 80/100

---

## 🔒 SÉCURITÉ

### Changer le mot de passe professeur

Dans le fichier `auth.js`, ligne 16 :
```javascript
verifyPassword(password) {
  return password === "prof2024";  // ⚠️ CHANGER CE MOT DE PASSE
}
```

**Remplacer par un mot de passe fort :**
```javascript
verifyPassword(password) {
  return password === "VotreMotDePasseSecurise123!";
}
```

---

## 📊 RÉFÉRENCEMENT LOCAL (SEO)

### Google My Business

1. Créer une fiche Google My Business
2. Catégorie : "Club de judo"
3. Ajouter photos, horaires, adresse
4. Lier votre site web

### Mots-clés importants pour Lambersart

- "club judo Lambersart"
- "cours judo Lambersart"  
- "judo enfant Lambersart"
- "JAK Lambersart"
- "dojo Lambersart"

### Optimisation texte

Ajouter ces phrases dans vos pages :
- "Situé à Lambersart, le club JAK..."
- "Cours de judo à Lambersart pour tous niveaux"
- "Rejoignez le dojo de Lambersart"

---

## 📱 APRÈS LE DÉPLOIEMENT

### Tests à effectuer :

- [ ] Toutes les pages se chargent correctement
- [ ] Les vidéos fonctionnent
- [ ] Le quiz fonctionne  
- [ ] La connexion professeur fonctionne
- [ ] Le site est responsive (mobile/tablette/desktop)
- [ ] HTTPS activé (cadenas vert dans le navigateur)
- [ ] Temps de chargement < 3 secondes

### Prochaines étapes :

1. Créer un compte Google Analytics (gratuit)
2. Ajouter le code de tracking dans toutes les pages
3. Créer une page de contact
4. Ajouter un formulaire d'inscription
5. Créer une newsletter

---

## 🆘 PROBLÈMES COURANTS

### "La page ne charge pas"
→ Vérifier que tous les fichiers sont uploadés
→ Vérifier les chemins des liens (pas de majuscules)

### "Les vidéos ne marchent pas"
→ Utiliser des liens YouTube ou hébergement vidéo externe
→ Éviter de mettre de gros fichiers vidéo sur l'hébergement

### "Le certificat SSL n'est pas activé"
→ Attendre 24h après activation
→ Forcer HTTPS dans les paramètres d'hébergement

---

## 📞 SUPPORT

En cas de problème, je suis là pour vous aider !
N'hésitez pas à me poser des questions.

---

**Date de création : 12 décembre 2024**
**Version : 1.0**
