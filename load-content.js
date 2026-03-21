// ===== VIDEOS ET IMAGES PAR GRADE =====
// Lit d'abord contenus-grades.json (visible par tous)
// puis complète avec localStorage (local uniquement)
function chargerContenuParGrade(gradeId) {
  fetch('contenus-grades.json')
    .then(r => r.json())
    .then(data => {
      const grade = data[gradeId] || { videos: [], images: [] };
      afficherVideos(gradeId, grade.videos);
      afficherImages(gradeId, grade.images);
    })
    .catch(() => {
      afficherVideos(gradeId, []);
      afficherImages(gradeId, []);
    });
}

function afficherVideos(gradeId, videosJson) {
  const videoBlock = document.querySelector('.video-block');
  if (!videoBlock) return;

  // Videos depuis JSON uniquement (visible par tous)
  let items = [...videosJson];

  if (items.length > 0) {
    videoBlock.innerHTML = '';
    items.forEach(v => {
      const el = document.createElement("div");
      el.className = "video-item";
      el.innerHTML = `
        <a class="lien-bleu" href="${v.url}" target="_blank">📺 ${v.texte || v.titre || ''}</a>
        <p><strong>Catégorie :</strong> ${v.categorie || ''}</p>
      `;
      videoBlock.appendChild(el);
    });
  }
}

function afficherImages(gradeId, imagesJson) {
  const imageBlock = document.querySelector('.image-block');
  if (!imageBlock) return;

  // Images depuis JSON uniquement (visible par tous)
  let items = [...imagesJson];

  if (items.length > 0) {
    imageBlock.innerHTML = '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:1.5rem;"></div>';
    const grid = imageBlock.querySelector('div');

    items.forEach(img => {
      const el = document.createElement("div");
      el.style.cssText = "background:white; padding:1rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1); text-align:center;";

      if (img.estLien) {
        el.innerHTML = `
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">📄</div>
          <h3 style="color:#2c3e50; margin:0.5rem 0; font-size:1.05rem;">${img.description || img.nom || ''}</h3>
          <a href="${img.url}" target="_blank" style="display:inline-block; margin-top:0.5rem; background:#27ae60; color:white; padding:0.4rem 0.9rem; border-radius:20px; text-decoration:none; font-size:0.85rem;">🔗 Ouvrir</a>
        `;
      } else {
        el.innerHTML = `
          ${img.data ? `<img src="${img.data}" alt="${img.nom||''}" style="width:100%; height:200px; object-fit:contain; border-radius:8px; margin-bottom:0.5rem; background:#f8f9fa;">` : ''}
          ${img.lienDrive ? `<img src="${img.lienDrive}" alt="${img.nom||''}" style="width:100%; height:200px; object-fit:contain; border-radius:8px; margin-bottom:0.5rem; background:#f8f9fa;">` : ''}
          <h3 style="color:#2c3e50; margin:0.5rem 0; font-size:1.1rem;">${img.nom || ''}</h3>
          <p style="color:#7f8c8d; margin:0.3rem 0; font-size:0.9rem;">${img.categorie || ''}</p>
          ${img.lien ? `<a href="${img.lien}" target="_blank" style="display:inline-block; margin-top:0.5rem; background:#3498db; color:white; padding:0.4rem 0.9rem; border-radius:20px; text-decoration:none; font-size:0.85rem;">🔗 ${img.lienTexte || 'Voir le lien'}</a>` : ''}
        `;
      }
      grid.appendChild(el);
    });
  }
}

// ANCIENNE FONCTION conservée pour compatibilité
function _chargerContenuParGrade_local(gradeId) {
  const sauvegardeVideos = localStorage.getItem("videos");
  if (sauvegardeVideos) {
    const videos = JSON.parse(sauvegardeVideos);
    const videoBlock = document.querySelector('.video-block');
    
    const videosGrade = videos.filter(v => v.grade === gradeId);
    
    if (videosGrade.length > 0) {
      videoBlock.innerHTML = '';
      videosGrade.forEach(v => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";
        videoItem.innerHTML = `
          <a class="lien-bleu" href="${v.url}" target="_blank">📺 ${v.texte}</a>
          <p><strong>Catégorie :</strong> ${v.categorie}</p>
          ${v.section ? `<p><strong>Section :</strong> ${v.section === 'techniques-de-base' ? '🥋 Techniques de Base' : '⚡ Variantes Avancées'}</p>` : ''}
        `;
        videoBlock.appendChild(videoItem);
      });
    }
  }
  
  // Charger les images (avec ou sans lien associé)
  const imageBlock = document.querySelector('.image-block');
  const images = JSON.parse(localStorage.getItem("images") || "[]");
  const liens  = JSON.parse(localStorage.getItem("liens-images") || "[]");

  const imagesGrade = images.filter(img => img.grade === gradeId);
  const liensGrade  = liens.filter(l => l.grade === gradeId);

  const totalItems = imagesGrade.length + liensGrade.length;

  if (totalItems > 0) {
    imageBlock.innerHTML = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;"></div>';
    const grid = imageBlock.querySelector('div');

    // --- Images (PNG/JPG), avec lien optionnel ---
    imagesGrade.forEach(img => {
      const el = document.createElement("div");
      el.style.cssText = "background: white; padding: 1rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;";
      el.innerHTML = `
        ${img.data ? `<img src="${img.data}" alt="${img.nom}" style="width:100%; height:200px; object-fit:contain; border-radius:8px; margin-bottom:0.5rem; background:#f8f9fa;">` : ''}
        <h3 style="color:#2c3e50; margin:0.5rem 0; font-size:1.1rem;">${img.nom}</h3>
        <p style="color:#7f8c8d; margin:0.3rem 0; font-size:0.9rem;"><strong>Catégorie :</strong> ${img.categorie}</p>
        ${img.section ? `<p style="color:#7f8c8d; margin:0.3rem 0; font-size:0.9rem;"><strong>Section :</strong> ${img.section === 'techniques-de-base' ? '🥋 Techniques de Base' : '⚡ Variantes Avancées'}</p>` : ''}
        ${img.lien ? `<a href="${img.lien}" target="_blank" style="display:inline-block; margin-top:0.5rem; background:#3498db; color:white; padding:0.4rem 0.9rem; border-radius:20px; text-decoration:none; font-size:0.85rem;">🔗 ${img.lienTexte || 'Voir le lien'}</a>` : ''}
      `;
      grid.appendChild(el);
    });

    // --- Liens seuls (sans image) ---
    liensGrade.forEach(l => {
      const el = document.createElement("div");
      el.style.cssText = "background: white; padding: 1rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;";
      el.innerHTML = `
        <div style="font-size:2.5rem; margin-bottom:0.5rem;">📄</div>
        <h3 style="color:#2c3e50; margin:0.5rem 0; font-size:1.05rem;">${l.description}</h3>
        <p style="color:#7f8c8d; margin:0.3rem 0; font-size:0.85rem;">${l.date || ''}</p>
        <a href="${l.url}" target="_blank" style="display:inline-block; margin-top:0.5rem; background:#27ae60; color:white; padding:0.4rem 0.9rem; border-radius:20px; text-decoration:none; font-size:0.85rem;">🔗 Ouvrir le document</a>
      `;
      grid.appendChild(el);
    });
  }
}

// ===== DOCUMENTS DRIVE PAR GRADE (visibles par tous) =====
function chargerDocumentsDrive(gradeId) {
  const block = document.querySelector('.documents-block');
  if (!block) return;

  fetch('documents-grades.json')
    .then(r => r.json())
    .then(data => {
      const docs = data[gradeId];
      if (!docs) return;

      block.innerHTML = '';

      if (docs.tablette) {
        const el = document.createElement("div");
        el.style.cssText = "background:white; padding:1rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1); text-align:center; margin-bottom:1rem;";
        el.innerHTML = `
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">📋</div>
          <h3 style="color:#2c3e50; margin:0.5rem 0;">Tablette Technique</h3>
          <a href="${docs.tablette}" target="_blank" style="display:inline-block; margin-top:0.5rem; background:#8B4513; color:white; padding:0.5rem 1.2rem; border-radius:20px; text-decoration:none; font-weight:bold; font-size:0.9rem;">📄 Ouvrir la tablette</a>
        `;
        block.appendChild(el);
      }

      if (docs.resume) {
        const el = document.createElement("div");
        el.style.cssText = "background:white; padding:1rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1); text-align:center; margin-bottom:1rem;";
        el.innerHTML = `
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">📝</div>
          <h3 style="color:#2c3e50; margin:0.5rem 0;">Résumé des Techniques</h3>
          <a href="${docs.resume}" target="_blank" style="display:inline-block; margin-top:0.5rem; background:#1a5276; color:white; padding:0.5rem 1.2rem; border-radius:20px; text-decoration:none; font-weight:bold; font-size:0.9rem;">📄 Ouvrir le résumé</a>
        `;
        block.appendChild(el);
      }
      if (docs.nage_no_kata) {
        const el = document.createElement("div");
        el.style.cssText = "background:white; padding:1rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1); text-align:center; margin-bottom:1rem;";
        el.innerHTML = `
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">📖</div>
          <h3 style="color:#2c3e50; margin:0.5rem 0;">Nage no Kata — Kodokan</h3>
          <a href="${docs.nage_no_kata}" target="_blank" style="display:inline-block; margin-top:0.5rem; background:#2c3e50; color:white; padding:0.5rem 1.2rem; border-radius:20px; text-decoration:none; font-weight:bold; font-size:0.9rem;">📄 Ouvrir le document</a>
        `;
        block.appendChild(el);
      }

      if (docs.goshin_jitsu) {
        const el = document.createElement("div");
        el.style.cssText = "background:white; padding:1rem; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1); text-align:center; margin-bottom:1rem;";
        el.innerHTML = `
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">📖</div>
          <h3 style="color:#2c3e50; margin:0.5rem 0;">Goshin Jitsu — Kodokan</h3>
          <a href="${docs.goshin_jitsu}" target="_blank" style="display:inline-block; margin-top:0.5rem; background:#2c3e50; color:white; padding:0.5rem 1.2rem; border-radius:20px; text-decoration:none; font-weight:bold; font-size:0.9rem;">📄 Ouvrir le document</a>
        `;
        block.appendChild(el);
      }


    })
    .catch(err => console.error('Erreur documents Drive:', err));
}
