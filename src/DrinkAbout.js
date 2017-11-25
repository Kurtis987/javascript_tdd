DrinkAbout = function() {
	this.drink = "";
};

DrinkAbout.prototype.whatCanIDrink = function(age) {
	if (typeof(age) == "number") {
		if(age < 0)
		{
			this.drink = "Sorry. I can’t tell what drink because that age is incorrect!";
			return this.drink;
		}
		else if(age < 14)
		{
			this.drink = "Drink Toddy";
			return this.drink;
		}
		else if(age < 18)
		{
			this.drink = "Drink Coke";
			return this.drink;
		}
		else if(age < 21)
		{
			this.drink = "Drink Beer";
			return this.drink;
		}
		else if(age < 130)
		{
			this.drink = "Drink Whiskey";
			return this.drink;
		}
		else
		{
			this.drink = "Sorry. I can’t tell what drink because that age is incorrect!";
			return this.drink;
		}
	}
	else{
		alert("Argument must be a number");
	}
};