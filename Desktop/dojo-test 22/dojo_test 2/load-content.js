// Script pour charger les vidéos et images par grade
function chargerContenuParGrade(gradeId) {
  // Charger les vidéos
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
  
  // Charger les images
  const sauvegardeImages = localStorage.getItem("images");
  if (sauvegardeImages) {
    const images = JSON.parse(sauvegardeImages);
    const imageBlock = document.querySelector('.image-block');
    
    const imagesGrade = images.filter(img => img.grade === gradeId);
    
    if (imagesGrade.length > 0) {
      imageBlock.innerHTML = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;"></div>';
      const gridContainer = imageBlock.querySelector('div');
      
      imagesGrade.forEach(img => {
        const imageItem = document.createElement("div");
        imageItem.style.cssText = "background: white; padding: 1rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;";
        imageItem.innerHTML = `
          <img src="${img.data}" alt="${img.nom}" style="width: 100%; height: 200px; object-fit: contain; border-radius: 8px; margin-bottom: 0.5rem; background: #f8f9fa;">
          <h3 style="color: #2c3e50; margin: 0.5rem 0; font-size: 1.1rem;">${img.nom}</h3>
          <p style="color: #7f8c8d; margin: 0.3rem 0; font-size: 0.9rem;"><strong>Catégorie :</strong> ${img.categorie}</p>
          ${img.section ? `<p style="color: #7f8c8d; margin: 0.3rem 0; font-size: 0.9rem;"><strong>Section :</strong> ${img.section === 'techniques-de-base' ? '🥋 Techniques de Base' : '⚡ Variantes Avancées'}</p>` : ''}
        `;
        gridContainer.appendChild(imageItem);
      });
    }
  }
}
