'use strict';

let deleteItem = (arr, item) => {
    const filteredItems = arr.filter((i) => {
        return i !== item
    })

    return filteredItems;
};


const updateProduct = (name, details, price, img, category) => {
    let productAfterUpdate = {
        newName: name,
        newDetails: details,
        newPrice: price,
        newImg: img,
        newCategory: category,
    };
    return productAfterUpdate;
}

const addItems = (arr, item) => {
    return [...arr, item];
      
};


//module.exports = { addItems, updateProduct, deleteItem };
