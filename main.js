//1.
// Build a celsiusToFahrenheit and a fahrenheitToCelsius function
// Build a universal function  'tryconvert' that will take a value for temperature whether fahrenheit or celsius and convert it to the other



//2.
//fix this code so that it logs:
//I need to start coding
//I'm practicing my coding now
// I have finished my coding
let value = 'coding';
function needToStart(subject) {
  setTimeout(() => {
    console.log(`I need to start ${subject}`);
  }, 3000);
}
function working(subject) {
  setTimeout(() => {
    console.log(`I'm practicing my ${subject} now`);
  }, 2000);
}
function finished(topic) {
  setTimeout(() => {
    console.log(`I have finished my ${topic} finally!`);
  }, 1000);
}
needToStart();
working();
finished();



//3.
/* It takes 5 seconds to add murrays to the database but only one second to get the data from the httpPlaces database.  
I want to see a list of all of the places in the array including murrays
Use callbacks to make this happen
*/
let places = [
  { name: "Joe's Pizza", address: '285 Madison' },
  { name: 'Dunkin Donuts', address: '299 42nd St' },
];
const murrays = { name: "Murray's Steakhouse", address: '1222 Lexington Ave' };
function addPlace(object, array) {
  setTimeout(() => {
    array.push(object);
    console.log('Now I have the data');
  }, 5000);
}
function httpPlaces(array) {
  setTimeout(() => {
    array.forEach((item) => {
      console.log(item);
    });
  }, 1000);
}
addPlace(murrays, places);
httpPlaces(places);



/*4.
Create 2 global variables
1. customerLeft
2. customerIsShopLifting
Set them both to true for now
Create a function Expression called customerCallback that will hold a function
The function should have 2 parameters that are functions
1. resolveCallback
2. rejectCallback
Inside the customerCallback Create 3 conditiionals
Conditional 1: The first conditional evaluates if customerLeft is true
Inside the conditional create an object, 'errorObj' with a key called message with a value 'The customer left'
and a key text with value 'Hope they didn't steal anything'
Pass the object to the rejectCallback function
Conditional 2: The second conditional evaluates it the customer is shoplifting
If true:
Create object,'errorObj', that has a message, 'Customer is stealing' and a text, 'Someone should call security'
Conditional 3: Third conditional should cover everything else
and resolveCallback function should just pass a string 'Lots of stuff for you to buy so pull out that credit card!'
Globally create 2 new functions
1. welcome
2. uh oh
welcome function
should take a string as a parameter and log 'Welcome!' then a new line. then the text from the argument
uhOh function:
uhOh should take an argument called error
it should log message on one line and the text on the other from the error
Outputs should result with messages based on your boolean values for customerLeft and customerIsShopping
*/



//5. Stretch Goal
//create a global variable called schoolName that takes the name of a school
// create a function 'figureStudents' 
// figureStudents takes 3 parameters: a schoolName, an array of students, and a callback
//the function filters through the data and invokes a callback on the array item based on the school name criteria.
// be sure to account for if the school name in the schoolName variable does not exist in the array
//invoke figure students and have it return all the students with a grade above 68
//OUTPUT:
// Sydney from Bronxville passed with a grade of 94
// Lotty from Bronxville passed with a grade of 87
// Joan from Bronxville passed with a grade of 98
// write a function findTotal
// the function will reuse the figureStudents function. It should find the average of all the students from a school.
//the callback in argument for figure students should calculates how many Scarsdale students there are (if schoolName is Scarsdale) and what the average grade is.
//findTotal should log this output if the schoolName is 'Bronxville'
// OUTPUT:
//'The 10 students from Bronxville have an average grade of 81'
//If the schoolName does not exist program should log 'school does not exist'
let students = [
  { name: 'Sydney', grade: 94, school: 'Bronxville' },
  { name: 'Lolly', grade: 62, school: 'Scarsdale' },
  { name: 'Robert', grade: 75, school: 'Scarsdale' },
  { name: 'Lotty', grade: 87, school: 'Bronxville' },
  { name: 'Bulthasar', grade: 89, school: 'Scarsdale' },
  { name: 'Kendra', grade: 98, school: 'Scarsdale' },
  { name: 'Lan', grade: 88, school: 'Scarsdale' },
  { name: 'Sydney', grade: 98, school: 'Bronxville' },
];
let schoolName; // will equal the name of a school
findTotal();
figureStudents(schoolName, students);
