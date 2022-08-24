
import assert from "assert";
import greet from "../greet.js";


//const assert = require("assert");
//const greet = require("../greet");


describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});