// Write a program that displays current date and time in
// your browser.

var date=new Date();
document.write(date  + "<br>");

//  Write a program that alerts the current month in words.
// For example December.

var array=["January","February","March","April","May","June","July","August","September","October","November","Decembar"];
var date=new Date();
var month=date.getMonth();
document.write("Current month: " + array[month]+ "<br>");

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var array=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
var date=new Date();
var day=date.getDay();
document.write("Today is "+ array[day] + "<br>");

// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var date=new Date();
var day=date.getDay();

if(day==0 || day==6){
    alert("It's Fun day");
}
else{
    alert("It's Working day");
}

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


var date=new Date();
var month=date.getMonth();

if(month<16){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}

// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var date=new Date();
document.write("Current Date: " + date + "<br>");
var time=date.getTime();
var min=time/(1000*60);

document.write("Ellapsed milliseconds since January 1,1970: " + time + "<br>");
document.write("Ellapsed minutes since Januuary 1,1970: " + min + "<br>");

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var time=date.getHours();

if(time>12){
    alert("It's AM");
}
else{
    alert("It's PM");
}

// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var dataobj=new Date("12 31 2020");
document.write("Later date: " + dataobj + "<br>");

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var today=new Date();
var date=new Date("3 10 2024");

var past=today.getTime()-date.getTime();

var pastdate=past/(1000*60*60*24);

document.write(Math.round(pastdate) + " days have passed since 1st Ramzan 2015 "+ "<br>")

// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var today=new Date();
var past=today.getTime();
var year=new Date("Jan 01 2015");
var milli=year.getTime();
var res=past-milli;
var sec=res/1000;
sec=Math.floor(sec);
document.write("on reference date: " + today + "<br>" );
document.write(sec + " seconda has passed since beginning of 2015 " + "<br>");

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var date=new Date();
var hours=date.getHours();
var newhours=new Date(date.setHours(hours-1));
document.write("1 Hour ago " + newhours + "<br>");

// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var date=new Date();
var years=date.getFullYear();
var newyear=new Date(date.setFullYear(years-100));
document.write("100 year ago " + newyear + "<br>");

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var date=new Date();
var birthday=new Date("02 24 2024") ;
var newdate=date-birthday;
var round=Math.round(newdate/(1000*60*60*24*7));
document.write("Your age is " + round + "<br>");
document.write("Your birth year is: 2004 " + "<br>");

// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

var customername="Faiza Shakir Khan";
var currentmonth="June";
var Numberunits=410;
var charges=16;
var netamount=Numberunits+charges;
var latepayment=350;
var grossamount=netamount+latepayment;

document.write("<h3> K-electric Bill </h3>");

document.write("Customer Name: " + customername + "<br>");
document.write("Month: " + currentmonth + "<br>");
document.write("Number of units: " + Numberunits + "<br>");
document.write("Charges per unit: "+ charges + "<br>");
document.write("Net Amount Payable(within Due Date): " + netamount + "<br>");
document.write("Late payment surcharge: " + latepayment + "<br>");
document.write("Gross amount Payable (after Due Date): " + grossamount + "<br>")
