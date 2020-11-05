const cart = [];
const producContainer = document.getElementById('produc__container');
// const allProduct = [{ image: "https://via.placeholder.com/300.png/09f/ff", name: "a", details: "100", category: "men", price: 100 }, { image: "https://via.placeholder.com/300.png/09f/ff", name: "a", details: "100", category: "men", price: 100 }, { image: "https://via.placeholder.com/300.png/09f/ff", name: "a", details: "100", category: "men", price: 100 }];
const allProduct = JSON.parse(localStorage.getItem('products'));
const render = (allProduct) => {
    allProduct.forEach((product) => {
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

        var addToCart = document.createElement('button');
        addToCart.innerText = "Add to Cart";
        div.appendChild(addToCart);

        producContainer.appendChild(div);

        addToCart.addEventListener('click', event => {
            const pro = { image: image.src, name: productName.innerText, details: productDetails.innerText, category: productCategory.innerText, price: productPrice.innerText }
            cart.push(pro);
            localStorage.setItem("cart", JSON.stringify(cart));

        });




    });

    document.getElementById("button").addEventListener('click', event => {
        const inp = document.getElementById("Search").value;
        const searchByName = (allProduct, inp) => {
            const searchResult = [...allProduct];
            const filteredItems = searchResult.filter((i) => {
                return i.name === inp;

            })

            render(filteredItems);


        }


    });

}

render(allProduct);

const grid = document.getElementById('grid_view');
const list = document.getElementById('list_view');

grid.addEventListener('click', () => {
    producContainer.setAttribute("class", "gird__view");
    div.style.width = "30%";
    div.style.margin = "2%"
});

list.addEventListener('click', () => {
    producContainer.setAttribute("class", "list__view");
    div.style.width = "97%";
    div.style.margin = "2%"
});

