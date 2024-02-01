

function openLightbox(photographerName, mediaSource, altText) {
    const lightboxImage = document.querySelector('.lightbox_media');    
    const imageSource = `../../assets/medias/${photographerName}/${mediaSource}`;
    lightboxImage.innerHTML = mediaSource.indexOf(".jpg")>-1 ? `<img src="${imageSource}" alt="${altText}" aria-label="${altText}">`
    : `<video controls class="gallery_thumbnail" aria-label="${altText}">
    <source src="${imageSource}" type="video/mp4">
</video>` 
     

}



function closeLightbox(){
    const lightbox = document.querySelector(".lightbox_wrapper");
    lightbox.style.display = "none";
}