/// <reference types="cypress" />

import fizzbuzz from '../../../resources/fizzbuzz';
// math exports a default object with methods
import math from '../../../resources/math';

describe('Unit Test Application Code', () => {
  const {
    add, divide, multiply, subtract,
  } = math;

  before(() => {
    // check if the import worked correctly
    expect(add, 'add').to.be.a('function');
  });

  context('math.js', () => {
    it('can add numbers', () => {
      expect(add(1, 2)).to.eq(3);
    });

    it('can subtract numbers', () => {
      expect(subtract(5, 12)).to.eq(-7);
    });

    it('can divide numbers', () => {
      expect(divide(27, 9)).to.eq(3);
    });

    it('can muliple numbers', () => {
      expect(multiply(5, 4)).to.eq(20);
    });
  });

  context('fizzbuzz.js', () => {
    function numsExpectedToEq(arr, expected) {
      // loop through the array of nums and make
      // sure they equal what is expected
      arr.forEach((num) => {
        expect(fizzbuzz(num)).to.eq(expected);
      });
    }

    it('returns "fizz" when number is multiple of 3', () => {
      numsExpectedToEq([9, 12, 18], 'fizz');
    });

    it('returns "buzz" when number is multiple of 5', () => {
      numsExpectedToEq([10, 20, 25], 'buzz');
    });

    it('returns "fizzbuzz" when number is multiple of both 3 and 5', () => {
      numsExpectedToEq([15, 30, 60], 'fizzbuzz');
    });
  });
});
