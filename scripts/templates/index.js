//pour la page d'accueil
function createPhotographerCard(_photographer) {
    const { name, portrait, city, country, tagline, price, id } = _photographer;
    const picture = `assets/photographers/Photos/${portrait}`;
    const url_photographer = `photographer.html?id=${id}`;
  
    // Créer l'élément de la carte de photographe
    const article = document.createElement("article");
    const photographerCard = `
              <a href="${url_photographer}" role="link" aria-label="Voir le profil de ${name}">
                  <img class="photographer_profile_picture" src="${picture}" alt="${name}">
                  <h2 class="photographer_name">${name}</h2>
              </a>
              <p class="photographer_cityCountry">${city}, ${country}</p>
              <p class="photographer_tagline">${tagline}</p>
              <span class="photographer_price">${price}€/jour</span>
          `;
      article.innerHTML = photographerCard;
      return article;
}
    
