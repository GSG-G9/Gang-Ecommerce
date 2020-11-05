const { updateProduct, addItems, deleteItem, searchByName } = require('../scripts/pure.js');

describe('Testing delete item ', () => {
    test('Should delete product and return new Array', () => {
        const arr = [{ productname: 'product1', price: '120' }, { productname: 'product2', price: '130' }, { productname: 'aproduct3', price: '140' }];
        const item = { productname: 'aproduct3', price: '140' };
        const actual = deleteItem(arr, item);
        const expected = [{ productname: 'product1', price: '120' }, { productname: 'product2', price: '130' }]
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
        const item = { abc: 'd' };
        const actual = addItems(arr, item);
        const expected = [...arr, item];
        expect(actual).toEqual(expected);
    });
});


describe('Testing search by name', () => {
    test('Should return array when given an array and searched name', () => {

        const actual = searchByName([{ name: 'shirt', price: 100 }, { name: 'abs', price: 100 }, { name: 'shirt', price: 300 }], "shirt");
        const expected = [{ name: 'shirt', price: 100 }, { name: 'shirt', price: 300 }];
        expect(actual).toEqual(expected);
    });
});