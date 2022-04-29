function Tab(tab) {
    const item = document.createElement("button");
    item.classList.add("swiper-slide");
    item.classList.add("tab-category-btn");
    item.innerHTML = `
        ${tab}
	`;
    return item;
}

export default function TabList( TabList ) {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("swiper-wrapper");
    TabList.forEach(item => {
        tabDiv.appendChild(Tab(item));
    });
    return tabDiv;
}

