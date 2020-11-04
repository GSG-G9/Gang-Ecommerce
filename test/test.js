const { deleteFromCart, updateProduct, addItems, deleteItem} = require('../scripts/pure.js');

describe('Testing delete item form cart', ()=>{
    test('Should delete product and return new Array', ()=>{
        const arr = [{a: 'a' , a2:'a'} , {b: 'b', b2:'b'} , {c: 'c', c2:'c'} ];
        const item = {c: 'c', c2:'c'};
        const actual = deleteFromCart(arr, item);
        const expected = [{a: 'a', a2:'a'} , {b: 'b', b2:'b'} ]
        expect(actual).toStrictEqual(expect.objectContaining(expected));
    });
});

describe('Testing delete product items', () => {
    test('Should deleteProduct and return newArray ', () => {
        const arr = ['a', 'b', 'c'];
        const item = 'c';
        const actual = deleteItem(arr, item);
        const expected = ['a', 'b'];
        expect(actual).toEqual(expected);
    });
});

describe('Testing updating products ', () => {
    test('Should return newArr when given arr', () => {
        const actual = updateProduct('shirt', 'details', 100, 'url', 'clothes');
        const expected = {
            newName: 'shirt',
            newDetails: 'details',
            newPrice: 100,
            newImg: 'url',
            newCategory: 'clothes'
        };
        expect(actual).toEqual(expected);
    });
});

describe('Testing add product items', () => {
    test('Should return array with new item when given an array', () => {
        const arr = ['a', 'b', 'c'];
        const item = 'd';
        const actual = addItems(arr, item);
        const expected = [...arr, item];
        expect(actual).toEqual(expected);
    });
});
