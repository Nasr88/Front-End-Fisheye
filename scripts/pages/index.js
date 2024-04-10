async function getPhotographers() {
  let photographers;
  let response = await fetch("data/photographers.json");
  let data = await response.json();
  photographers = data.photographers;
  return photographers;
}

async function displayPhotographers() {
  // Obtenir les données des photographes
  const photographers = await getPhotographers();

  const photographersSection = document.querySelector(".photographer_section");

  // Ajouter chaque carte de photographe à la section des photographes
  photographers.forEach((photographer) => {
    const photographerCard = createPhotographerCard(photographer);
    photographersSection.appendChild(photographerCard);
  });
}

// Appeler la fonction pour afficher les photographes lors du chargement de la page
displayPhotographers();
