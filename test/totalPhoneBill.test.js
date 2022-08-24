import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";


describe(' Testing my totalPhoneBill function' , function(){
    it("It should return `R7.45` if items are'call, sms, call, sms, sms'" , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });

    it("It should return `R3.40` if items are'call, sms'" , function(){
        assert.equal(totalPhoneBill('call, sms'),'R3.40');
    });

    it("It should return `R1.30` if items are'sms, sms'" , function(){
        assert.equal(totalPhoneBill('sms, sms'),'R1.30');
    });

    

    
});