function photographerTemplate(data) {
    const { name, portrait, city,country,tagline,price } = data;

    const picture = `assets/photographers/Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const p_cityCountry = document.createElement( 'p' );
        const p_tagline = document.createElement( 'p' );
        const s_price = document.createElement( 'span' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        let text = document.createTextNode(`${city}, ${country}`);
        p_cityCountry.appendChild(text);
        text = document.createTextNode(`${tagline}`);
        p_tagline.appendChild(text);
        s_price.textContent = `${price}€/jour`;
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p_cityCountry);
        article.appendChild(p_tagline);
        article.appendChild(s_price);

        
        
        
        
        return (article);

        
     
    }
    return { name, picture, getUserCardDOM }
}