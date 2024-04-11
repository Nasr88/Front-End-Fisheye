const displayLightbox = (medias,photographer) => {

    const lightboxWrapper = document.querySelector('.lightbox_wrapper');
    const btnClose = document.querySelector('.btn_close_lightbox');
    const btnPrevious = document.querySelector('.btn_previous');
    const btnNext = document.querySelector('.btn_next');
    const lightboxMedia = document.querySelector('.lightbox_media');
    const mediaProvider = Array.from(document.querySelectorAll('.gallery_card a'));
    const main = document.getElementById('main');
    
    const mediasList = medias;
    let currentIndex = 0; 
   
    const openMedia = (media)=>{
        
            const mediaId = media.dataset.media;
            const mediaIndex = mediasList.findIndex(media => media.id == mediaId);
            currentIndex = mediaIndex;
    
            // Afficher la modal
            lightboxWrapper.style.display = 'flex';
            lightboxWrapper.setAttribute("aria-hidden", "false");
            lightboxWrapper.setAttribute("aria-modal", "true");
            
    
            // Définir le focus sur le bouton de fermeture
            btnClose.focus();
    
            // Appeler la fonction pour mettre à jour le contenu de la modal
            lightboxTemplate();
    
            // Ajouter un écouteur d'événement pour la touche "Entrée" sur le bouton de fermeture
            btnClose.addEventListener("keydown", handleKeyDown);
        

    }
    mediaProvider.forEach(media => {
    media.addEventListener('click',()=>{openMedia(media)} );
    media.addEventListener('keyup',(e)=>{
        if(e.key === "Enter")
         openMedia(media)
        });
    }); 
    const lightboxTemplate = () => {
        const currentMedia = mediasList[currentIndex];
        
        lightboxMedia.innerHTML = `
            ${currentMedia.image ? `
            <img src="assets/medias/${photographer.name}/${currentMedia.image}" tabindex=0 alt="${currentMedia.title}">` : 
            `<video controls aria-label="${currentMedia.title}"><source src="assets/medias/${photographer.name}/${currentMedia.video}" type="video/mp4"></video>`}

            <figcaption>${currentMedia.title}</figcaption>
        `;
    };
    
    function closeLightbox() {
        lightboxWrapper.style.display = "none";
        lightboxWrapper.setAttribute("aria-hidden", "true");
        lightboxWrapper.setAttribute("aria-modal", "false");
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


