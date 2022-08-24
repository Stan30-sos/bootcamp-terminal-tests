import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('Test my isFromBellville function' , function(){
    it("It should return `true` if numberPlate.startsWith 'CY'" , function(){
        assert.equal(isFromBellville('CY245'),true);
    });

    it("It should return `false`, if numberPlate starts with 'CJ'" , function(){
        assert.equal(isFromBellville("CJ245"),false);
    });

    
    it("It should return `false`, if numberPlate does not start with 'CY'" , function(){
        assert.equal(isFromBellville("CK245"),false);
    });

});