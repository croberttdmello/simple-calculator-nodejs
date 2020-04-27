const calc = require('./calc');

describe('Calc function add', () => {
  it('Should return 27 when it receives ​​25 and 2 respectively', () => {
    let numberOne = 25;
    let numberTwo = 2;
    expect(calc.add(numberOne , numberTwo)).toBe(27);
  })
})

describe('Calc function sub', () => {
  it('Should return 23 when it receives ​​25 and 2 respectively', () => {
    let numberOne = 25;
    let numberTwo = 2;
    expect(calc.sub(numberOne , numberTwo)).toBe(23);
  })
})

describe('Calc function mult', () => {
  it('Should return 50 when it receives ​​25 and 2 respectively', () => {
    let numberOne = 25;
    let numberTwo = 2;
    expect(calc.mult(numberOne , numberTwo)).toBe(50);
  })
})

describe("Calc function div", () => {
  it('Should return 12.5 when it receives ​​25 and 2 respectively', () => {
    let numberOne = 25;
    let numberTwo = 2;
    expect(calc.div(numberOne , numberTwo)).toBe(12.5);
  })
  it('Should return Infinity when it receives 0 in the second parameter', () => {
    let numberOne = 25;
    let numberTwo = 0;
    expect(calc.div(numberOne , numberTwo)).toBe(Infinity);
  })
})