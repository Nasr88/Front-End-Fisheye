function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function closeLightbox(){
    const lightbox = document.querySelector(".lightbox_wrapper");
    lightbox.style.display = "none";
}

