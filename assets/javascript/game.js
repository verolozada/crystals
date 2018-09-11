// generate random numbers for the user to guess between 19-120
// assign values to the cristal
// click the crystals and show the value on screen
// sum the values from the crystal clicked
// if the number is equal to the computer wins increase by one and reset
// if the number is above the computer's choice the losses increase by one and reset
//create a function to reset the values

// variables to keep score
var wins = 0;
var losses = 0;

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
var number = computerNumber[Math.floor(Math.random() * computerNumber.length)];
var crystal1 = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var crystal2 = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var crystal3 = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
var crystal4 = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
// variable to hold the sum of the crystals values
var cnumber = 0;

function reset() {
    number = computerNumber[Math.floor(Math.random() * computerNumber.length)];
    $("#number").html(number);
    crystal1 = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    crystal2 = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    crystal3 = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    crystal4 = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];
    cnumber = 0;
    $("#cvalue").html("Your score is: " + cnumber);
};

function win() {
    wins++;
    $("#wins").html("Wins: " + wins);
    reset();
}

function lose() {
    losses++;
    $("#losses").html("Losses: " + losses);
    reset();
}

function count() {
    // display value selected from the computer
    $("#number").html(number);

    // assign values to the cristals
    $("#c1-button").on("click", function () {
        $("#c1-button").val(crystal1);
    });

    $("#c2-button").on("click", function () {
        $("#c2-button").val(crystal2);
    });

    $("#c3-button").on("click", function () {
        $("#c3-button").val(crystal3);
    });

    $("#c4-button").on("click", function () {
        $("#c4-button").val(crystal4);
    });

    // count everytime a button is clicked
    $(".button").on("click", function () {
        num = parseInt($(this).val());
        console.log(num);
        cnumber = cnumber + num;
        // console.log(cnumber);
        $("#cvalue").html("Your score is: " + cnumber);

        if (cnumber === number) {
            win();    
        } else if (cnumber > number) {
            lose();
        } 
    });  
}
count();

