function photographerTemplate(_photographer) {
  const { name, portrait, city, country, tagline, price, id } = _photographer;

  const picture = `assets/photographers/Photos/${portrait}`;
  const url_photographer = `photographer.html?id=${id}`;

  function getUserCardDOM() {
    //     const article = document.createElement("article");
    //     const img = document.createElement("img");
    //     const p_cityCountry = document.createElement("p");
    //     const p_tagline = document.createElement("p");
    //     const s_price = document.createElement("span");
    //     const link = document.createElement("a");
    //     img.setAttribute("src", picture);
    //     img.classList.add("photographer_profile_picture");
    //     p_cityCountry.classList.add("photographer_cityCountry");
    //     p_tagline.classList.add("photographer_tagline");
    //     s_price.classList.add("photographer_price");
    //     const h2 = document.createElement("h2");
    //     h2.textContent = name;
    //     h2.classList.add("photographer_name");
    //     link.append(img, h2); //ajouter img et h2 au lien
    //     let text = document.createTextNode(`${city}, ${country}`);
    //     p_cityCountry.appendChild(text);
    //     text = document.createTextNode(`${tagline}`);
    //     p_tagline.appendChild(text);
    //     s_price.textContent = `${price}€/jour`;

    //     //article.appendChild(img);
    //     //article.appendChild(h2);
    //     article.appendChild(link);
    //     article.appendChild(p_cityCountry);
    //     article.appendChild(p_tagline);
    //     article.appendChild(s_price);

    //     return article;
    //   }

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
