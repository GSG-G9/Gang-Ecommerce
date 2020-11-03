let addItems = require('../scripts/pure.js');

describe('Testing product items', () => {
    test('Should return array with new item when given an array', () => {
        let arr = ['a','b','c'];
        let item = 'd';
        let actual = addItems(arr, item);
        let expected = [...arr, item];
        expect(actual).toEqual(expected);
        console.log(expected);
    });
});