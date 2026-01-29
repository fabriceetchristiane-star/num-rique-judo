// ===== SYSTÈME D'AUTHENTIFICATION ULTRA-SIMPLE =====
// Dojo Numérique - Version Debug

console.log('🔐 Chargement auth.js...');

const auth = {
  SESSION_KEY: 'dojo_session',
  SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 heures

  // Vérifier le mot de passe
  verifyPassword(password) {
    console.log('🔍 Test mot de passe:', password);
    const isValid = password === "Hadjime@2026";
    console.log('✅ Résultat:', isValid);
    return isValid;
  },

  // Vérifier si une session existe et est valide
  checkSession() {
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY);
      
      if (!sessionData) {
        console.log('❌ Pas de session');
        return false;
      }

      const session = JSON.parse(sessionData);
      const now = new Date().getTime();

      if (now > session.expires) {
        console.log('⏰ Session expirée');
        this.clearSession();
        return false;
      }

      console.log('✅ Session valide');
      return true;

    } catch (error) {
      console.error('❌ Erreur session:', error);
      return false;
    }
  },

  // Créer une session
  createSession() {
    const session = {
      authenticated: true,
      created: new Date().getTime(),
      expires: new Date().getTime() + this.SESSION_DURATION
    };

    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    console.log('✅ Session créée avec succès !');
  },

  // Supprimer la session
  clearSession() {
    localStorage.removeItem(this.SESSION_KEY);
    console.log('🗑️ Session supprimée');
  },

  // Déconnexion
  logout() {
    this.clearSession();
    window.location.href = 'index.html';
  }
};

// Protection automatique des pages admin
document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 Page chargée, vérification...');
  const isAdminPage = window.location.pathname.includes('admin.html');
  
  if (isAdminPage && !auth.checkSession()) {
    alert('⛔ Accès non autorisé. Veuillez vous connecter.');
    window.location.href = 'index.html';
  }
});

// Fonction de déconnexion globale
function deconnexion() {
  if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
    auth.logout();
  }
}

console.log('✅ Système auth.js chargé !');
console.log('🔑 Mot de passe actif : "Hadjime@2026"');

// Rendre auth accessible globalement pour debug
window.auth = auth;
