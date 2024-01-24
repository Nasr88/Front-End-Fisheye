//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographerDetail() {
  // Récupère l'ID du photographe à partir de l'attribut href
  const photographerId = getPhotographerIdFromHref();

  let photographers;
  let response = await fetch("../../data/photographers.json");
  let data = await response.json();
  photographers = data.photographers;

  const clickedPhotographer = photographers.filter(
    (photgrapher) => photgrapher.id.toString() === photographerId
  );

  console.log(clickedPhotographer);
}

function getPhotographerIdFromHref() {
  // Analyse l'ID du photographe à partir de l'URL
  const url = new URL(window.location.href);
  // Utilise searchParams pour obtenir la valeur du paramètre 'id' de l'URL
  return url.searchParams.get("id");
}

getPhotographerDetail();
