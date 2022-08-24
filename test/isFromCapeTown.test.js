
import assert from "assert";
import isFromCapeTown from "../isFromCapeTown.js";

describe('Test my isFromCapeTown function' , function(){
    it("It should return `true` if num.startsWith 'CA'" , function(){
        assert.equal(isFromCapeTown('CA 452 36'),true);
    });

    it("It should return `false`, if numberplate starts with 'CJ'" , function(){
        assert.equal(isFromCapeTown("CJ 245 20"),false);
    });

    
    it("It should return `false`, if numberPlate does not start with 'CA'" , function(){
        assert.equal(isFromCapeTown("CK245"),false);
    });

});