const{add, subtract, multiply,divide} = require('./math');
test('add 2+3 to equal 5',()=>{
    expect(add(2,3)).toBe(5);
});

test('subtract 25 and 4 to equal 1',()=>{
    expect(subtract(25,4)).toBe(21);
});
test('multiply 4 and 5 to be equal 20',()=>{
    expect(multiply(4,5)).toBe(20);
});

test('divide 9 and 3 to be equal 3',()=>{
    expect(divide(9,3)).toBe(3);
});

