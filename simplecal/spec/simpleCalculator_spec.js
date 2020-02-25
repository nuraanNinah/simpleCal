 let myTest=require("../src/simple_calculator.js");
 let add = myTest.add

 let multiply=myTest.multiply

describe("add", function(){
    it("should return 3",function(){
        expect(add(1,2)).toBe(3)
    });
    it("should return -2",function(){
        expect(add(-1,-1)).toBe(-2)
    });

    it("should return 15",function(){
        expect(add(1,2,3,4,5)).toBe(15)
    });
});

describe("multiply", function(){
    it("should return 3",function(){
        expect(multiply(1,3)).toBe(3)
    });
    it("should return -3",function(){
        expect(multiply(-1,3)).toBe(-3)
    });
    it("should return 120",function(){
        expect(multiply(1,2,3,4,5)).toBe(120)
    });
})


