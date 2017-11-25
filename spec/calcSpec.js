describe("Calculator", function() {

	beforeEach(function () {
		calc = new Calculator();
	});
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        }); 

        it("should not return 4 if the parameters given don't add up to 4", function (){
        	calc.add(12);
        	calc.add(7);
        	expect(calc.value).toBe(19);
        }); 

        it("should have called the alert function if either number is undefined", function(){
        	spyOn(window, "alert");
        	calc.add();
        	expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });

   	describe('Subtraction function', function() {
        it('should subtract one number from the total and return the result', function() {
            calc.value = 4;
            calc.subtract(2);
            expect(calc.value).toBe(2);
        }); 

        it("should not return 2 if the parameters given don't result in 2", function (){
        	calc.value = 12;
        	calc.subtract(7);
        	expect(calc.value).toBe(5);
        }); 

        it("should return a negative number if the argument is greater than the total", function (){
        	calc.value = 7;
        	calc.subtract(12);
        	expect(calc.value).toBe(-5);
        });

        it("should have called the alert function if either number is undefined", function(){
        	spyOn(window, "alert");
        	calc.subtract();
        	expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });

    describe('Multiplication function', function() {
        it('should multiply one number by another and return the result', function() {
            calc.value = 4;
            calc.multiply(2);
            expect(calc.value).toBe(8);
        }); 

        it("should not return 8 if the parameters given don't result in 8", function (){
        	calc.value = 2;
        	calc.multiply(2);
        	expect(calc.value).toBe(4);
        }); 

        it("should return a negative number if one argument is negative", function (){
        	calc.value = 7;
        	calc.multiply(-7);
        	var result1 = calc.value; 
        	calc.value = -7;
        	calc.multiply(7);
        	var result2 = calc.value;
        	expect(result1 && result2).toBe(-49);
        });

        it("should not return a negative number if both arguments are negative", function (){
        	calc.value = -7;
        	calc.multiply(-7);
        	expect(calc.value).toBe(49);
        });

        it("should return 0 if either argument is 0", function (){
        	calc.multiply(7);
        	var result1 = calc.value;
        	calc.value = 7;
        	calc.multiply(0);
        	var result2 = calc.value;
        	expect(result1 && result2).toBe(0);
        });

        it("should have called the alert function if either number is undefined", function(){
        	spyOn(window, "alert");
        	calc.multiply();
        	expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });

    describe('Division function', function() {
        it('should divide one number by another and return the result', function() {
            calc.value = 4;
            calc.divide(2);
            expect(calc.value).toBe(2);
        }); 

        it("should not return 2 if the parameters given don't result in 2", function (){
        	calc.value = 2;
        	calc.divide(2);
        	expect(calc.value).toBe(1);
        }); 

        it("should return a negative number if one argument is negative", function (){
        	calc.value = 7;
        	calc.divide(-7);
        	var result1 = calc.value;
        	calc.value = -7;
        	calc.divide(7);
        	var result2 = calc.value;
        	expect(result1 && result2).toBe(-1);
        });

        it("should not return a negative number if both arguments are negative", function (){
        	calc.value = -7;
        	calc.divide(-7);
        	expect(calc.value).toBe(1);
        });

        it("should return 0 if first argument is 0", function (){
	    	calc.divide(7);
        	expect(calc.value).toBe(0);
        });


        it("should have called the alert function if argument is undefined", function(){
        	spyOn(window, "alert");
        	calc.divide();
        	expect(window.alert).toHaveBeenCalledWith("Argument must be a number not equal to 0");
        });

        it("should have called the alert function if argument is 0", function(){
        	spyOn(window, "alert");
        	calc.divide(0);
        	expect(window.alert).toHaveBeenCalledWith("Argument must be a number not equal to 0");
        });
    });
});