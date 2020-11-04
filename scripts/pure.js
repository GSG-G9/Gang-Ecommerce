'use strict';

let deleteItem = (arr, item) => {
    const filteredItems = arr.filter((i) => {
        return i.productname !== item.productname
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
    let newArr = [...arr, item];
    return newArr;
};

const searchByName = (array, name) => {
    const searchResult = [...array];
    const filteredItems = searchResult.filter((i) => {

        return i.name === name;
    })

    return filteredItems;

}


module.exports = { addItems, updateProduct, deleteItem, searchByName };
