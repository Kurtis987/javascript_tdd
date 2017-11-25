describe("DrinkAbout", function() {
	beforeEach(function () {
		myDrink = new DrinkAbout();
	});
	describe("What Can I drink function", function(){
		it("should not return a drink if age is less than 0", function(){
			myDrink.whatCanIDrink(-1);
			expect(myDrink.drink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
		});
		it("should return Drink Toddy if age is less than 14", function(){
			myDrink.whatCanIDrink(10);
			expect(myDrink.drink).toBe("Drink Toddy");
		});
		it("should return Drink Coke if age is less than 18", function(){
			myDrink.whatCanIDrink(16);
			expect(myDrink.drink).toBe("Drink Coke");
		});
		it("should return Drink Beer if age is less than 21", function(){
			myDrink.whatCanIDrink(20);
			expect(myDrink.drink).toBe("Drink Beer");
		});
		it("should return Drink Whiskey if age is less than 130", function(){
			myDrink.whatCanIDrink(100);
			expect(myDrink.drink).toBe("Drink Whiskey");
		});
		it("should not return a drink if age is greater than 129", function(){
			myDrink.whatCanIDrink(130);
			expect(myDrink.drink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
		});
		it("should have called the alert function if age undefined", function(){
        	spyOn(window, "alert");
        	myDrink.whatCanIDrink();
        	expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
	});
});