function UpdateNews(id, type, href, src, alt, name, subject, comment) {
    const item = document.createElement("li");
    item.classList.add("update-news-list-item-" + type);
    item.innerHTML = `
        <a href="${href}" class="update-news-link">
            <div class="update-news-list-img">
                <img src="${src}" alt="${alt}" />
            </div>
            <div class="update-news-info">
                <p class="update-news-subject">${subject}</p>
                <div class="update-news-list-info">
                    <span class="update-news-name">${name}</span>
                    <span class="update-news-comment">${comment}</span>
                </div>
            </div>
		</a>
	`;
    return item;
}

export default function UpdateNewsList({ UpdateNewsList }) {
    const updateNewsUl = document.createElement("ul");
    updateNewsUl.classList.add("update-news-list");
    UpdateNewsList.forEach(item => {
        updateNewsUl.appendChild(UpdateNews(item.id, item.type, item.href, item.src, item.alt, item.name, item.subject, item.comment ));
    });
    return updateNewsUl;
}