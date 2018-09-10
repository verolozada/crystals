// generate random numbers for the user to guess between 19-120
// assign values to the cristal
// click the crystals and show the value on screen
// sum the values from the crystal clicked
// if the number is equal to the computer wins increase by one and reset
// if the number is above the computer's choice the losses increase by one and reset

 
//set of numbers  for the computer to choose
var computerNumber = [];
for (var i = 19; i < 121; i++) {
    computerNumber.push(i);
}

//possible values for the crystals
var crystalNumber = [];
for (var i = 1; i < 13; i++) {
    crystalNumber.push(i);
}

//random numbers for the user to see. 
var number = computerNumber[Math.floor(Math.random ()* computerNumber.length)];
var crystal = crystalNumber[Math.floor(Math.random ()* crystalNumber.length)];


