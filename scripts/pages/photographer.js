import mediasFactory from "../factories/mediasFactory.js";

//Mettre le code JavaScript lié à la page photographer.html
const photographerModalName = document.querySelector(
  ".modal_photographer_name"
);

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

  const photographerInfoSection = document.getElementById("section_about");

  const photogInfoModel = createPhotographerHeader(clickedPhotographer[0]);
  photographerInfoSection.appendChild(photogInfoModel);

  // console.log(clickedPhotographer);
  // console.log(clickedPhotographer[0].name);

  // recuperer les medias de json
  const medias = data.media;
  const photgrapherMedias = medias
    .filter((media) => media.photographerId === +photographerId)
    .map((_media) => new mediasFactory(_media));
  displayPhotographerMedia(clickedPhotographer[0], photgrapherMedias);
  //console.log(photgrapherMedias);

  //display total likes
  const med = data.media;
  const calculateLikesById = (_medias, targetId) => {
    let totalLikes = 0;

    _medias.forEach((media) => {
      const { photographerId, likes } = media;

      if (photographerId === targetId) {
        totalLikes += likes;
      }
    });

    return totalLikes;
  };
  let sumTotoalLikes = calculateLikesById(med, clickedPhotographer[0].id);

  //console.log(sumTotoalLikes);
  const likesSpan = document.querySelector(".photographer_likes_count");
  likesSpan.innerHTML = sumTotoalLikes.toString();

  //like and dislike
  const allBtnLike = document.querySelectorAll(".btn_like");
  allBtnLike.forEach((btn) => {
    btn.addEventListener("click", () => {
      const likesElement = btn.previousElementSibling;
      const medias = data.media;
      const _media = medias.find((media) => media.id == btn.dataset.id);
      if (!btn.classList.contains("liked")) {
        _media.likes++;
        sumTotoalLikes++;
      } else {
        _media.likes--;
        sumTotoalLikes--;
      }
      likesElement.innerHTML = _media.likes.toString();
      likesSpan.innerHTML = sumTotoalLikes.toString();
      btn.classList.toggle("liked");
    });
  });
}

function getPhotographerIdFromHref() {
  // Analyse l'ID du photographe à partir de l'URL
  const url = new URL(window.location.href);
  // Utilise searchParams pour obtenir la valeur du paramètre 'id' de l'URL
  return url.searchParams.get("id");
}

getPhotographerDetail();
