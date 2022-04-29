function Banner( type, href, src, alt, title, subTitle, comment ) {
    const item = document.createElement("div");
    item.classList.add("swiper-slide");
    if(type == "type-01"){
        item.innerHTML = `
            <a href="${href}" class="banner-item ${type}">
                <div class="banner-img">
                    <img src="${src}" alt="${alt}" />
                </div>
                <p class="banner-text">
                    <span class="banner-title">${title}</span>
                    ${subTitle ? `<span class="banner-sub-title">${subTitle} ${comment ? `<em class="banner-comment">${comment}</em>` : ''} </span>` : ''} 
                    
                </p>
            </a>
        `;
    }else if(type == "type-02"){
        item.innerHTML = `
            <a href="${href}" class="banner-item ${type}">
                <p class="banner-text">
                    <span class="banner-title">${title}</span>
                    <span class="banner-sub-title">${subTitle}</span>
                </p>
                <div class="banner-img">
                    <img src="${src}" alt="${alt}" />
                </div>
            </a>
        `;
    }
    return item;
}

export default function BannerList({ BannerList }) {
    const bannerDiv = document.createElement("div");
    bannerDiv.classList.add("swiper-wrapper");
    BannerList.forEach(item => {
        bannerDiv.appendChild(Banner(item.type, item.href, item.src, item.alt, item.title, item.subTitle, item.comment));
    });
    return bannerDiv;
}