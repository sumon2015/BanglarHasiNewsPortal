// Get today's current date.
var now = new Date();

// Array list of days.
var days = new Array('রবিবার ','সোমবার ','মঙ্গলবার ','বুধবার ','বৃহস্পতিবার','শুক্রবার','শনিবার ');

// Array list of months.
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

// Calculate the number of the current day in the week.
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();

// Calculate four digit year.
function fourdigits(number)	{
	return (number < 1000) ? number + 1900 : number;
							}

// Join it all together
today =  days[now.getDay()] + ", " +
			   date + " " +
			  months[now.getMonth()] + ", " +
				(fourdigits(now.getYear())) ;

// Print out the data.
document.write(" আজ " +today+ "");