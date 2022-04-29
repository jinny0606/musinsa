function Product(id, type, href, src, alt, name, price, discount, coupon) {
    const item = document.createElement("li");
    item.classList.add("product-list-item-" + type);
    item.innerHTML = `
        <a href="${href}">
            <div class="product-list-img">
                <em class="product-list-badge">${id}</em>
                <img src="${src}" alt="${alt}" />
            </div>
            
            <p class="product-list-name">${name}</p>
            <div class="product-list-info">
                <strong class="product-list-price">${price}</strong>
                ${discount ? `<div class="product-list-discount">${discount}</div>` : ''}              
                ${coupon ? `<div class="product-list-coupon">${coupon}</div>` : ''}              
            </div>
		</a> 
	`;
    return item;
}

export default function ProductList({ ProductList }) {
    const productUl = document.createElement("ul");
    productUl.classList.add("product-list");
    ProductList.forEach(item => {
        productUl.appendChild(Product(item.id, item.type, item.href, item.src, item.alt, item.name, item.price, item.discount, item.coupon ));
    });
    return productUl;
}