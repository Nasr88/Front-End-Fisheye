function photographerTemplate(_photographer) {
  const { name, portrait, city, country, tagline, price, id } = _photographer;

  const picture = `assets/photographers/Photos/${portrait}`;
  const url_photographer = `photographer.html?id=${id}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const photographerCard = `
            <a href="${url_photographer}" class="photographer-link" role="link" aria-label="Voir le profil de ${name}">
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
  return { name, picture, getUserCardDOM };
}

function createPhotographerHeader(_photog) {
  const { name, portrait, city, country, tagline} = _photog;
  
      const profilePageHeader = document.querySelector(".main_about");
      // const formName = document.querySelector(".modal_photographer_name");
      // formName.textContent = this.photographer.name;
      //const metaDescription = document.querySelector('meta[name="description"]');
      // if (metaDescription) {
      //     metaDescription.content = `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
      // };
      const about = `
          <div class="photographer_profile__infos">
              <h1 class="photographer_name">${name}</h1>
              <p class="photographer_location">${city}, ${country}</p>
              <p class="photographer_tagline">${tagline}</p>    
          </div>
          <button class="contact_button" type="button" aria-label="Contact Me"  onclick="displayModal()" >Contactez-moi</button>
          <img class="photographer_photo" src="assets/photographers/photos/${portrait}" alt="${name}">
      `;
      profilePageHeader.innerHTML = about;
      return profilePageHeader;
    };
  