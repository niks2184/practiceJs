function leapYear(year)
{
	var counter = 20;
	while(counter >= 0)
	{
		if((year%4 == 0) && (year%100 != 0) || (year%400 == 0))
		{
			console.log(year);
		  year++;
		  counter--;
		}
		else{
			year++;
		}
	}
}
leapYear(2000);