//test features(exclusive, inclusive and pending)

// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require('assert');
const { equal } = require('assert');

describe('Test features - Test Suite', function(){

    ////run addition tests only
    // it.only('Addition of two numbers', function(){

    //     var a = 20;
    //     var b = 20;

    //     var c = a+b;

    //     assert.equal(c,40);

    // });




    //skip subtraction tests
    // it.skip('Subtraction of two numbers', function(){

    //     var a = 20;
    //     var b = 20;

    //     var c = a-b;

    //     assert.equal(c,0);

    // });

    // pending test, has no callback function
    it('Pending test, no callback')




    it('Addition of two numbers', function(){

        var a = 20;
        var b = 20;

        var c = a+b;

        assert.equal(c,40);

    });

    it('Subtraction of two numbers', function(){

        var a = 20;
        var b = 20;

        var c = a-b;

        assert.equal(c,0);

    });

    it('Multiplication of two numbers', function(){

        var a = 20;
        var b = 20;

        var c = a*b;

        assert.equal(c,400);

    });

    it('Division of two numbers', function(){

        var a = 20;
        var b = 20;

        var c = a/b;

        assert.equal(c,1);

    });

});