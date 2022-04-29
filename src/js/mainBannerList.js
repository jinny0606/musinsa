function MainBanner(href, src, alt, title, category, subTitle) {
    const item = document.createElement("div");
    item.classList.add("swiper-slide");
    item.innerHTML = `
        <a href="${href}">
            <div class="main-visual-img"><img src="${src}" alt="${title}" /></div>
            <div class="main-visual-text">
                <p class="main-visual-category">${category}</p>
                <p class="main-visual-title">${title}</p>
                <p class="main-visual-sub-title">${subTitle}</p>
            </div>
		</a>
	`;
    return item;
}

export default function MainBannerList({ MainBannerList }) {
    const mainBannerDiv = document.createElement("div");
    mainBannerDiv.classList.add("swiper-wrapper");
    MainBannerList.forEach(item => {
        mainBannerDiv.appendChild(MainBanner(item.href, item.src, item.src, item.title, item.category, item.subTitle));
    });
    return mainBannerDiv;
}

