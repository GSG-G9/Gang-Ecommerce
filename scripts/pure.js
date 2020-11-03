
function updateProduct(name,details, price , img ,category){

    
    let productAfterUpdate ={
        newname : name,
        newDetails:details,
        newPrice :price,
        newImg :img,
        newCategory :category,
    };
    
    return productAfterUpdate;

}

module.exports =updateProduct;