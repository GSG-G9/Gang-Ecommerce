'use strict';

let deleteItem = (arr, item) => {
    const filteredItems = arr.filter((i) => {
        return i !== item
    })

    return filteredItems;
};



module.exports = deleteItem;
