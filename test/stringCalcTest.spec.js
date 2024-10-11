const stringCalculator = require('../index');
describe("stringCalculator",function(){
    it("should check if input string length is zero",function(){
        const inputString = "";
        expect(stringCalculator(inputString)).toBe(0);
    })
})