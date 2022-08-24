import assert from "assert";
import transportFee from "../transportFee.js";


describe(' Testing my transportFee function' , function(){
    it("It should return 'You will be charged R20'  if shift.starts with 'm'" , function(){
        assert.equal(transportFee('morning'),'You will be charged R20');
    });

    it("It should return 'You will be charged R10'  if shift.starts with 'a'" , function(){
        assert.equal(transportFee('afternoon'),'You will be charged R10');
    });

    it("It should return 'Ride is free'  if shift.starts with 'n'" , function(){
        assert.equal(transportFee('nightshift'),'Ride is free');
    });

    it("It should return 'please enter shift' if  shift is ''" , function(){
        assert.equal(transportFee(''),'please enter shift');
    });

    

    
});