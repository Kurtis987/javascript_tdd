FizzBuzz = function(number) {
	if(typeof(number) == "number")
	{
		if(number % 3 == 0 && number % 5 == 0)
		{
			return "FizzBuzz";
		}
		else if(number % 3 == 0)
		{
			return "Fizz";
		}
		else if(number % 5 == 0)
		{
			return "Buzz";
		}
		else
		{
			return number;
		}
	}
	else 
	{
		alert("Argument must be a number");
	}
};