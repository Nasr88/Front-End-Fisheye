
//pour les informations en haut de la page photographer
function createPhotographerHeader(_photog) {
  const { name, portrait, city, country, tagline} = _photog;
  
      const article = document.createElement("aticle");
      article.classList.add("main_about")
      const about = `
          <div class="photographer_profile__infos">
              <h1 class="photographer_header_name">${name}</h1>
              <p class="photographer_header_location">${city}, ${country}</p>
              <p class="photographer_header_tagline">${tagline}</p>    
          </div>
          <button class="contact_button" type="button" aria-label="Contact Me" onclick="displayModal()" >Contactez-moi</button>
          <img class="photographer_header_photo" src="blob/master/assets/photographers/photos/${portrait}" alt="${name}">
      `; 
      article.innerHTML = about;
      return article;
    };
  
 
  //pour afficher les medias
    function displayPhotographerMedia (_photographer, _media){
      const { name, price} = _photographer;
      
      
      const profilePageContent = document.querySelector(".main_content_medias");
        const content = `
            <section class="gallery">
                ${_media.map(media => {
            const mediaContent = media.image
                ? ` <img class="gallery_thumbnail" src="assets/medias/${name}/${media.image}" alt="${media.alt}">`
                : ` <video class="gallery_thumbnail" aria-label="${media.alt}">
                        <source src="assets/medias/${name}/${media.video}" type="video/mp4">
                    </video>`;
            return `
                    <article class="gallery_card">                           
                        <a href="#" data-media=${media.id} role="link" aria-label="View media large">
                            <figure>${mediaContent}</figure>
                        </a>
                        <figcaption>
                            <h2>${media.title}</h2>
                                <div role="group" aria-label="Like button and number of likes">
                                    <span class="nbLike">${media.likes}</span> 
                                    <button class="btn_like" type="button" aria-label="Like"  data-id="${media.id}">
                                        <span class="fas fa-heart" aria-hidden="true"></span>
                                    </button> 
                                </div>
                        </figcaption>
                    </article>
                `;
        }).join("")}
            </section >
            <aside>
                <p class="photographer_Likes">
                    <span class="photographer_likes_count"></span>
                    <span class="fas fa-heart" aria-hidden="true"></span>
                </p>
                <span>${price}€ / jour</span>
            </aside>
        `;

        profilePageContent.innerHTML = content;
        return content;
    };
