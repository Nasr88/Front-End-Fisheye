//Mettre le code JavaScript lié à la page photographer.html
const photographerModalName = document.querySelector(".modal_photographer_name");

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
  photographerModalName.innerHTML = clickedPhotographer[0].name;

   const photographerInfoSection = document.querySelector(".main_about");
   const photogInfoModel = createPhotographerHeader(clickedPhotographer[0]);
   photographerInfoSection.appendChild(photogInfoModel);

  // console.log(clickedPhotographer);
  // console.log(clickedPhotographer[0].name);
  

  
}


function getPhotographerIdFromHref() {
  // Analyse l'ID du photographe à partir de l'URL
  const url = new URL(window.location.href);
  // Utilise searchParams pour obtenir la valeur du paramètre 'id' de l'URL
  return url.searchParams.get("id");
}

getPhotographerDetail();
