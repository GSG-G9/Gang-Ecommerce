const deleteItem = require('../scripts/pure.js');


test('Should deleteProduct and return newArray ', () => {
    const arr = ['a', 'b', 'c'];
    const item = 'c';
    const actual = deleteItem(arr, item);
    const expected = ['a', 'b'];
    expect(actual).toEqual(expected);
})