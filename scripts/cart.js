const clearCart = document.getElementById('clear__cart');

clearCart.addEventListener("click", () => {
    window.localStorage.removeItem('cart');
});

// const cart = localStorage.getItem(JSON.parse('cart')) || [];

const cart = [{ image: "https://via.placeholder.com/300.png/09f/ff", name: "khamis", details: "100", category: "men", price: 100 }];

const render = () => {
    cart.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("products");

        const image = document.createElement('img');
        image.src = product.image;
        div.appendChild(image);

        const productName = document.createElement('p');
        productName.innerText = product.name;
        div.appendChild(productName);

        const productDetails = document.createElement('p');
        productDetails.innerText = product.details;
        div.appendChild(productDetails);

        const productCategory = document.createElement('p');
        productCategory.innerText = product.category;
        div.appendChild(productCategory);

        const productPrice = document.createElement('p');
        productPrice.innerText = product.price;
        div.appendChild(productPrice);



        document.body.appendChild(div);





    });


}

render();



