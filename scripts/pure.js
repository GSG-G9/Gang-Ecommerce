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
// try to edit update function
function updateOneProduct (arr, action){
    return arr.map((item, index) => {
        if (index != action.index) {
            return item;
        }

        return {
            ...item,
            ...action.item
        };
    })
}


const addItems = (arr, item) => {
    return [...arr, item];

};

const searchByName = (array, name) => {
    const filteredItems = array.filter((i) => {
        return i.name === name;
    })

    return filteredItems;

}


module.exports = { addItems, updateProduct, deleteItem, searchByName };
