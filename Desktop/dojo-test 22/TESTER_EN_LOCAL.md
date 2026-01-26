# 🔧 GUIDE : Tester en Local

## ❌ PROBLÈME

Quand vous ouvrez les fichiers directement (double-clic), vous êtes en mode **`file://`** et certaines fonctionnalités JavaScript ne marchent pas correctement.

---

## ✅ SOLUTION : Utiliser un serveur local

### **MÉTHODE 1 : Python** (Le plus simple)

1. **Ouvrir l'invite de commande (CMD)**
   - Appuyez sur **Windows + R**
   - Tapez : `cmd`
   - Appuyez sur Entrée

2. **Aller dans votre dossier**
   ```
   cd C:\Users\Fabrice\Desktop\dojo-test 22\dojo_test 2
   ```

3. **Lancer le serveur**
   ```
   python -m http.server 8000
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:8000
   ```

5. **Pour Grades Judo**, ouvrir un autre CMD et faire :
   ```
   cd C:\Users\Fabrice\Desktop\grades-judo 2
   python -m http.server 8001
   ```
   Puis ouvrir : `http://localhost:8001`

---

### **MÉTHODE 2 : Visual Studio Code + Live Server**

1. **Télécharger VS Code** (si pas déjà fait)
   - https://code.visualstudio.com

2. **Installer l'extension Live Server**
   - Ouvrir VS Code
   - Aller dans Extensions (Ctrl+Shift+X)
   - Chercher "Live Server"
   - Installer

3. **Ouvrir votre dossier**
   - Fichier → Ouvrir le dossier
   - Choisir `dojo_test 2`

4. **Lancer**
   - Clic droit sur `index.html`
   - "Open with Live Server"

---

### **MÉTHODE 3 : Extension Chrome "Web Server"**

1. Installer **"Web Server for Chrome"**
2. Lancer l'extension
3. Choisir le dossier
4. Cliquer sur l'URL

---

## 🧪 TEST : Ça marche maintenant ?

Une fois sur un serveur local (`http://localhost` ou `http://127.0.0.1`), vous devriez voir dans la console (F12) :

```
🔐 Chargement auth.js...
✅ Système auth.js chargé !
🔑 Mot de passe actif : "Hadjime@2026"
🏠 Page d'accueil chargée
```

Puis quand vous entrez le mot de passe :
```
🔍 Test mot de passe: Hadjime@2026
✅ Résultat: true
✅ Session créée avec succès !
```

---

## ❓ Questions fréquentes

### "Python n'est pas reconnu"
→ Vous n'avez pas Python installé. Installez-le depuis python.org ou utilisez la méthode VS Code

### "Ça ne marche toujours pas"
→ Videz le cache du navigateur (Ctrl+Shift+Delete)
→ Fermez complètement le navigateur et rouvrez

### "Comment arrêter le serveur Python ?"
→ Dans le CMD, appuyez sur **Ctrl+C**

---

**Date : 13 décembre 2024**
