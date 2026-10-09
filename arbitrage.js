function esc(t) {
  return String(t == null ? '' : t)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function liste(items) {
  if (!items || !items.length) return '';
  return '<ul>' + items.map(function(i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
}

function carte(c) {
  var couleur = esc(c.couleur || '#3498db');
  return '<div class="cat-card" style="border-top-color:' + couleur + ';">' +
    '<h3>' + esc(c.nom) + '</h3>' +
    '<span class="cat-age" style="background:' + couleur + ';">' + esc(c.age) + '</span>' +
    '<p class="cat-essentiel">' + esc(c.essentiel) + '</p>' +
    '<h4 class="ok">✅ Autorisé</h4>' + liste(c.autorise) +
    '<h4 class="ko">⛔ Interdit ou sanctionné</h4>' + liste(c.interdit) +
    '<h4 class="info">⚠️ Les fautes</h4><p class="petit">' + esc(c.fautes) + '</p>' +
    '<h4 class="info">⏱️ Durée du combat</h4><p class="petit">' + esc(c.duree) + '</p>' +
    '</div>';
}

fetch('arbitrage.json')
  .then(function(r) { return r.json(); })
  .then(function(d) {
    var html = '';
    html += '<div class="intro">' + esc(d.intro) + '</div>';
    html += '<div class="avert">' + esc(d.avertissement) + '</div>';
    html += '<div class="cat-grid">' + (d.categories || []).map(carte).join('') + '</div>';

    if (d.mots && d.mots.length) {
      html += '<div class="bloc"><h2>📖 Mots à connaître</h2><table class="mots-table">' +
        d.mots.map(function(m) {
          return '<tr><td class="terme">' + esc(m.terme) + '</td><td>' + esc(m.sens) + '</td></tr>';
        }).join('') + '</table></div>';
    }

    if (d.contact_erreur && d.contact_erreur.mail) {
      html += '<div class="bloc contact-err"><h2>✉️ Une erreur à signaler ?</h2><p>' + esc(d.contact_erreur.texte) +
        ' <a href="mailto:' + esc(d.contact_erreur.mail) + '">' + esc(d.contact_erreur.mail) + '</a></p></div>';
    }

    if (d.source) {
      html += '<p class="source"><strong>Sources :</strong> ' + esc(d.source) + '</p>';
    }

    document.getElementById('contenu').innerHTML = html;
  })
  .catch(function(e) {
    console.error('Erreur arbitrage.json :', e);
    document.getElementById('contenu').innerHTML = '<p style="color:red;">Erreur de chargement.</p>';
  });
