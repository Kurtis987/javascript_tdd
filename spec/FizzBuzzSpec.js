describe("FizzBuzz", function(){
	it("should return FizzBuzz if number is divisible by 3 and 5",function(){
		result = FizzBuzz(15);
		expect(result).toBe("FizzBuzz");
	});
	it("should return Fizz if number is divisible by 3", function(){
		result = FizzBuzz(21);
		expect(result).toBe("Fizz");
	});
	it("should return Buzz if number is divisible by 5", function(){
		result = FizzBuzz(25);
		expect(result).toBe("Buzz");
	});
	it("should just return the number it is not divisible by 3 or 5", function(){
		result = FizzBuzz(22);
		expect(result).toBe(22);
	});
	it("should display an alert if the argument is not a number", function(){
		spyOn(window, "alert");
		FizzBuzz();
		expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
	});
});