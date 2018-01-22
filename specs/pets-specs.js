var sut = require('../src/pets.js');

describe("when calling getPets()", function(){
    it("should return a list of URLs", function(){
        expect(sut.getPets().length).toBeGreaterThan(0);
    });
});