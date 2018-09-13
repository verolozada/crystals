// variables to keep score
var wins = 0;
var losses = 0;

//images
var images = ["assets/images/win.jpg","assets/images/Game_Over.jpg" ];

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
    $("#cvalue").html("Your score is: ");
    // $(document).off("keyup", reset);
    // empty out children
};

// function picture(src, height, width, alt) {
//     var img = document.createElement("img");
//     img.src = src;
//     img.height = height;
//     img.width = width;
//     img.alt = alt;
    
//     return document.getElementById("cvalue").appendChild(img);
//   }

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
            // picture(images[0], 300, 200, "win");
            win();    
        } else if (cnumber > number) {
            // picture(images[1], 300, 200, "gameOver");
            lose();
        } 
    });  
}
count();

