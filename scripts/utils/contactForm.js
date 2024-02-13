const modal = document.getElementById("contact_modal");
const closeModalButton= document.querySelector(".btn_close");

function displayModal() {
	modal.style.display = "flex";
    closeModalButton.focus();
     // Ajouter un écouteur d'événement pour le bouton de fermeture
     closeModalButton.addEventListener("click", closeModal);

     // Ajouter un écouteur d'événement pour la touche "Entrée"
     closeModalButton.addEventListener("keydown", handleKeyDown);
 }

// Fonction pour gérer l'événement de touche enfoncée
function handleKeyDown(event) {
    if (event.key === "Enter") {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = "none";
    closeModalButton.removeEventListener("click", closeModal);
    closeModalButton.removeEventListener("keydown", handleKeyDown);
}


function logData(event){

    event.preventDefault(); 

    let formEl = document.forms.ContactPhotgrapherForm;
    let formData = new FormData(formEl);

    const prenom = formData.get('firstname');
    const nom = document.getElementById("lastname").value;
    const email = formData.get('email')
    const message = document.getElementById("message").value;
    console.log(
        "Prénom:",
      prenom,
      "\nNom:",
      nom,
      "\nE-mail:",
      email,
      "\nMessage:",
      message,
     
    );
    closeModal();
    event.preventDefault(); //pour eviter le chargement de la page sinon la modale confirmation se ferme
    
    formEl.reset();
}

//fermer le formulaire avec escape 
function handleEscapeKey(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}
modal.addEventListener("keydown", handleEscapeKey);


