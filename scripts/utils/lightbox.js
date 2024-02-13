const displayLightbox = (medias,photographer) => {

    const lightboxWrapper = document.querySelector('.lightbox_wrapper');
    const btnClose = document.querySelector('.btn_close_lightbox');
    const btnPrevious = document.querySelector('.btn_previous');
    const btnNext = document.querySelector('.btn_next');
    const lightboxMedia = document.querySelector('.lightbox_media');
    const mediaProvider = Array.from(document.querySelectorAll('.gallery_card a'));

    //const photographer = photographer;
    const mediasList = medias;
    let currentIndex = 0; 

    mediaProvider.forEach(media => {
        media.addEventListener('click', () => {
            const mediaId = media.dataset.media;
            const mediaIndex = mediasList.findIndex(media => media.id == mediaId);
            currentIndex = mediaIndex;
            lightboxWrapper.style.display = 'flex';
            btnClose.focus();
            lightboxTemplate();
             // Ajouter un écouteur d'événement pour la touche "Entrée"
             btnClose.addEventListener("keydown", handleKeyDown);
        });
    });
        
    const lightboxTemplate = () => {
        const currentMedia = mediasList[currentIndex];
        
        lightboxMedia.innerHTML = `
            ${currentMedia.image ? `
            <img src="assets/medias/${photographer.name}/${currentMedia.image}" alt="${currentMedia.alt}">` : 
            `<video controls aria-label="${currentMedia.alt}"><source src="assets/medias/${photographer.name}/${currentMedia.video}" type="video/mp4"></video>`}

            <figcaption>${currentMedia.title}</figcaption>
        `;
    };
    
    function closeLightbox() {
        const lightbox = document.querySelector(".lightbox_wrapper");
        lightbox.style.display = "none";
    }

    const nextMedia = () => {
        currentIndex++;
        if (currentIndex > mediasList.length - 1) currentIndex = 0;
        lightboxTemplate();
    };

    const previousMedia = () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = mediasList.length - 1;
        lightboxTemplate();
    };

          
        
    document.addEventListener('keyup', e => {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                previousMedia();
                break;
            case 'ArrowRight':
                nextMedia();
                break;
        };
    });

    btnPrevious.addEventListener('click', () => previousMedia());
    btnNext.addEventListener('click', () => nextMedia());
    btnClose.addEventListener('click', () => closeLightbox());


    // Fonction pour gérer l'événement de touche enfoncée
function handleKeyDown(event) {
    if (event.key === "Enter") {
        closeLightbox();
    }
}

};


