//function calls (describe and it)

// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require('assert');
const { equal } = require('assert');

describe('Timeouts - Test Suite', function(){

    // //suite level timeout
    // this.timeout(5000);


    beforeEach(function(done){

        this.timeout(500);
        setTimeout(done,3000);
    });

        var a = 20;
        var b = 20;

    it('Addition of two numbers', function(){

        // //test level timeout
        // this.timeout(500);

        // setTimeout(done,3000);

        var c = a+b;

        assert.equal(c,40);

    });

    it('Subtraction of two numbers', function(){

        var c = a-b;

        assert.equal(c,0);

    });

    it('Multiplication of two numbers', function(){

        var c = a*b;

        assert.equal(c,400);

    });

    it('Division of two numbers', function(){

        var c = a/b;

        assert.equal(c,1);

    });

});