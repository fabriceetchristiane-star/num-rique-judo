# 🚀 GUIDE DÉPLOIEMENT GITHUB - PAS À PAS

---

## 📋 CE QUE NOUS ALLONS FAIRE

Vous avez déjà un repository GitHub : `dojo-num-rique`
On va le **mettre à jour** avec la nouvelle version optimisée !

---

## ✅ ÉTAPE 1 : PRÉPARER LES FICHIERS

### **A. Sauvegarder vos images**

1. **Prenez vos deux images** (judoka + laptop)
2. **Copiez-les dans les dossiers :**
   ```
   C:\Users\Fabrice\Desktop\dojo-test 22\dojo_test 2\images\
   C:\Users\Fabrice\Desktop\grades-judo 2\images\
   ```

3. **Renommez-les :**
   - Image laptop → `logo-dojo.png`
   - Image judoka → `logo-grades.png`

---

## ✅ ÉTAPE 2 : SE CONNECTER À GITHUB

### **Option A : Via le site web** 🌐 (Le plus simple)

1. **Ouvrir** https://github.com
2. **Se connecter** avec votre compte : `fabriceetchristiane-star`
3. **Aller sur votre repository** : https://github.com/fabriceetchristiane-star/dojo-num-rique

---

## ✅ ÉTAPE 3 : METTRE À JOUR LE REPOSITORY

### **Méthode 1 : Supprimer et recréer** (Recommandé - plus propre)

1. **Dans votre repository**, cliquez sur **"Settings"** (en haut à droite)
2. **Descendez tout en bas** → Section "Danger Zone"
3. **Cliquez sur "Delete this repository"**
4. **Tapez le nom** : `fabriceetchristiane-star/dojo-num-rique`
5. **Confirmer**

6. **Créer un nouveau repository** :
   - Nom : `dojo-numerique` (sans accents cette fois !)
   - Description : "Dojo Numérique - Club Judo Lambersart JAK"
   - Public
   - **NE PAS** cocher "Add a README"
   - Créer

---

### **Méthode 2 : Mettre à jour les fichiers** (Si vous gardez l'ancien)

1. **Aller dans le repository**
2. **Pour chaque fichier** :
   - Cliquer sur le fichier
   - Cliquer sur l'icône **"crayon" ✏️** (Edit)
   - **Copier tout le contenu** depuis votre PC
   - **Coller** dans GitHub
   - Cliquer **"Commit changes"**

---

## ✅ ÉTAPE 4 : UPLOADER LES NOUVEAUX FICHIERS

### **A. Fichiers principaux à uploader**

Dans votre nouveau repository vide :

1. **Cliquer sur "uploading an existing file"**

2. **Glisser-déposer TOUS ces fichiers** :
   ```
   ✅ index.html
   ✅ informations.html
   ✅ quiz.html
   ✅ admin.html
   ✅ auth.js
   ✅ robots.txt
   ✅ sitemap.xml
   ✅ manifest.json
   ✅ videos-par-grade.html
   ✅ videos-blanche-jaune.html
   ✅ videos-jaune-orange.html
   ✅ videos-orange-verte.html
   ✅ videos-verte-bleue.html
   ✅ videos-bleue-marron.html
   ✅ videos-marron-noir.html
   ✅ videos-noir.html
   ```

3. **Message de commit** : "Mise à jour site complet - version optimisée"
4. **Cliquer sur "Commit changes"**

### **B. Uploader le dossier styles**

1. **Créer un dossier** "styles" dans GitHub :
   - Cliquer sur "Add file" → "Create new file"
   - Taper : `styles/.gitkeep`
   - Commit

2. **Uploader le fichier CSS** :
   - Entrer dans le dossier `styles`
   - Cliquer "Add file" → "Upload files"
   - Glisser `style.css`
   - Commit

### **C. Uploader le dossier images**

1. **Créer le dossier** "images"
2. **Uploader vos images** :
   - `logo-dojo.png`
   - `icon-192.png` (si vous l'avez créée)
   - `icon-512.png` (si vous l'avez créée)

---

## ✅ ÉTAPE 5 : ACTIVER GITHUB PAGES

1. **Dans votre repository**, aller dans **"Settings"**
2. **Dans le menu gauche**, cliquer sur **"Pages"**
3. **Source** :
   - Branch : `main`
   - Folder : `/ (root)`
4. **Cliquer sur "Save"**

5. **Attendre 2-3 minutes** ⏰

6. **Votre site sera accessible à** :
   ```
   https://fabriceetchristiane-star.github.io/dojo-numerique/
   ```

---

## ✅ ÉTAPE 6 : VÉRIFIER QUE ÇA MARCHE

### **Checklist :**
- [ ] Le site s'affiche correctement
- [ ] La navigation fonctionne
- [ ] Le CSS est chargé
- [ ] La connexion professeur marche (mot de passe : `Hadjime@2026`)
- [ ] Les vidéos YouTube s'affichent

---

## 🎯 POUR LE DEUXIÈME SITE (GRADES JUDO)

**Répéter les mêmes étapes** avec :

1. **Créer un nouveau repository** :
   - Nom : `grades-judo`
   - Description : "Guide des Grades Judo - Référentiel FFJDA 2025/2026"

2. **Uploader les fichiers** de `grades-judo 2`

3. **Activer Pages**

4. **URL finale** :
   ```
   https://fabriceetchristiane-star.github.io/grades-judo/
   ```

---

## 🔗 LIER LES DEUX SITES

### **Dans Dojo Numérique** (index.html)

Vérifier que le lien vers Grades Judo est :
```html
<a href="https://fabriceetchristiane-star.github.io/grades-judo/">Passages de Grades</a>
```

### **Dans Grades Judo** (index.html)

Vérifier que le lien vers Dojo est :
```html
<a href="https://fabriceetchristiane-star.github.io/dojo-numerique/">Retour au Dojo Numérique</a>
```

---

## ⚠️ PROBLÈMES COURANTS

### "Le CSS ne charge pas"
→ Vérifier que le fichier est bien dans `styles/style.css`
→ Vérifier le chemin dans index.html

### "404 Not Found"
→ Attendre 5 minutes après activation de Pages
→ Vider le cache du navigateur (Ctrl+F5)

### "Les images ne s'affichent pas"
→ Vérifier qu'elles sont dans le dossier `images/`
→ Vérifier les chemins dans le HTML

---

## 🎉 RÉSULTAT FINAL

Vous aurez **DEUX sites en ligne** :

1. **🥋 Dojo Numérique**
   - https://fabriceetchristiane-star.github.io/dojo-numerique/
   - Pour les élèves du club

2. **📊 Grades Judo**
   - https://fabriceetchristiane-star.github.io/grades-judo/
   - Pour tous les judokas (national)

---

## 📞 EN CAS DE PROBLÈME

Si vous êtes bloqué à une étape :
1. Faites une capture d'écran
2. Notez à quelle étape vous êtes
3. On continue demain ensemble !

---

## ⏰ TEMPS ESTIMÉ

- Préparation : 10 minutes
- Upload fichiers : 15 minutes
- Configuration : 5 minutes
- **TOTAL : ~30 minutes** pour les deux sites

---

**Courage Fabrice ! C'est la dernière ligne droite ! 🚀**

**Date : 13 décembre 2024**
