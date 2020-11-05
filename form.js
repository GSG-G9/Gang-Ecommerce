const productName = document.getElementById('new-name');
const productPrice = document.getElementById('new-price');
const productcategory = document.getElementById('new-category');
const productImg = document.getElementById('new-img');
const productDetails = document.getElementById('new-details');
const submitBtn = document.getElementById('submit');



const products = [];




const addItems = (products, product) => {
    return array = [...products, product];
};

submitBtn.addEventListener('click', () => {
    const product = {
        name: productName.value,
        price: productPrice.value,
        category: productcategory.value,
        img_URL: productImg.value,
        details: productDetails.value,
    };

    if (productName.value == '') {
        alert('you have to enter name and price to be able to add new product');
    };


    localStorage.setItem("products", JSON.stringify(addItems(products, product)));


    console.log(products);
});