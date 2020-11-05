const clearCart = document.getElementById('clear__cart');

clearCart.addEventListener("click", () => {
    window.localStorage.removeItem('cart');
    //render();
    
 

});


// /const cart = [{ image: "https://via.placeholder.com/300.png/09f/ff", name: "khamis", details: "100", category: "men", price: 100 }];
//const cart = localStorage.getItem(JSON.parse(JSON.stringify('cart'))) || [];

const cart =  JSON.parse(localStorage.getItem('cart'));
//const cart = localStorage.getItem('cart') || [];
console.log(cart);

const render = (array) => {
    array.forEach((product) => {
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

if(localStorage.getItem('cart') == null){
    const empty = document.createElement('p');
    productName.innerText = "The cart is empty";
    document.body.appendChild(empty);

}
else{
    render(cart);
}



