const fizzBuzz = require('./fizzbuzz')
test('',()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});
test('',()=>{
    expect(fizzBuzz(18)).toBe('Fizz');
});
test('',()=>{
    expect(fizzBuzz(25)).toBe('Buzz');
});