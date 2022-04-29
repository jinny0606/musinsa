function Coordi(id, type, href, src, alt, thumbnail, thumbnailAlt, thumbnailHref, name, price, discount, badge, menu) {
    const item = document.createElement("li");

    item.classList.add("coordi-list-item-" + type);
    item.innerHTML = `
        <a href="${href}" class="coordi-link">
            <div class="coordi-list-img">
                <img src="${src}" alt="${alt}" />
                ${badge ? `<div class="coordi-badge"><span class="hidden">${badge}</span></div>` : ''}
            </div>
        </a>
         ${thumbnail ? `
            <a href="${thumbnailHref}" class="coordi-product">
                <div class="coordi-thumbnail"><img src="${thumbnail}" alt="${thumbnailAlt}" /></div>
                <div class="coordi-product-info">
                    <p class="coordi-list-name">${name}</p>
                    <div class="coordi-list-info">
                        <strong class="coordi-list-price">${price}</strong>
                        ${discount ? `<div class="coordi-list-discount">${discount}</div>` : ''} 
                            </div>
                </div>
            </a> 
         ` : ''}  
         	
          ${menu ? `<div class="coordi-menu">${name}</div>` : ''} 	
    `;

    return item;
}

export default function CoordiList({ CoordiList }) {
    const coordiUl = document.createElement("ul");
    coordiUl.classList.add("coordi-list");
    CoordiList.forEach(item => {
        coordiUl.appendChild(Coordi(item.id, item.type, item.href, item.src, item.alt, item.thumbnail, item.thumbnailAlt, item.thumbnailHref, item.name, item.price, item.discount, item.badge, item.menu ));
    });
    return coordiUl;
}