let updateProduct = require('../scripts/pure.js');


test('Should return newArr when given arr',  () =>{
	let actual = updateProduct('shirt','details',100,'url','clothes');
    let expected = {
        newname : 'shirt',
        newDetails :'details',
        newPrice :100,
        newImg :'url',
        newCategory :'clothes'
    };
    expect(actual).toEqual(expected);
	
});