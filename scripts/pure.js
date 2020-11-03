
const updateProduct = (name,details, price , img ,category)=> {
    let productAfterUpdate ={
        newName : name,
        newDetails:details,
        newPrice :price,
        newImg :img,
        newCategory :category,
    };
    return productAfterUpdate;
}

const addItems = (arr, item) => {
    let newArr = [...arr, item] ;
    return newArr;
};


module.exports ={addItems ,updateProduct} ;
