const stringCalculator = require('../index');
describe("stringCalculator",function(){
    it("should check if input string length is zero",function(){
        const inputString = "";
        expect(stringCalculator(inputString)).toBe(0);
    })

    it("should return the sum of the input string numbers separated by commas",function(){
        const inputString = "1,2,3";
        expect(stringCalculator(inputString)).toBe(6);
    })

    it("should return the sum of any numbers of the input string",function(){
        const inputString = "1,2,3,4,5";
        expect(stringCalculator(inputString)).toBe(15);
    })

    it("should return the sum of the input string numbers separated by newlines",function(){
        const inputString = "1\n2\n3";
        expect(stringCalculator(inputString)).toBe(6);
    })

    it("should return the sum of the input string numbers separated by other delimiters",function(){
        const inputString = "//;\n1;2;3";
        expect(stringCalculator(inputString)).toBe(6);
    })
})