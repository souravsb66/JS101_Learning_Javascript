// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let weekday = "Wed";

switch(weekday) {
  case 'Sun':
    console.log("Sunday");
    break;
  case 'Mon':
    console.log("Monday");
    break;
  case 'Tue':
    console.log("Tuesday");
    break;
  case 'Wed':
    console.log("Wednesday");
    break;
  case 'Thu':
    console.log("Thursday");
    break;
  case 'Fri':
    console.log("Friday");
    break;
  case 'Sat':
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Input"); 
}