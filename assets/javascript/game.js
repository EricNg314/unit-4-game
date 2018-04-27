

//========== Initialization Part 1 ===================================================//

//Declare guesses and values to be stored.
//Values are "scoreWins", "scoreLoss" "goalKibbles","currKibbles", "kibblesBtn1", 
//"kibblesBtn2","kibblesBtn3", "kibblesBtn4"


//========= Initialization Part 2 ====================================================//

//gameReset()
////Get random goalKibbles
////Set current kibbles = 0
////Assign values to each button.
////Display hungry cat.
////Display values.


//========== Clicking Event ===================================================//

//Display hungry cat, for new round as image.
//Check for user clicking.
//Check if user selected a class button choice, then pull initiated value.
//Add initiated value to current kibbles.


//========== Clicking Event (Check if win/loss)===================================================//

//Check if current kibbles = goal kibbles.
//==TRUE==//
//scoreWin + 1
//Sound of happy kitty.
//Output a you win message.
////gameReset()

//==ELSE IF current > desired==//
//scoreLoss + 1
//Sound of hissing kitty.
//Output an angry kitty.
//gameReset()

//==ELSE==//
//Sound of annoying/hungry kitty.


//=============================================================//


$(document).ready(function() {

    //Initialization Part 1
    var scoreWins = 0;
    var scoreLoss = 0;
    var goalKibbles = 0;
    var currKibbles = 0;
    var kibblesBtn1 = 0;
    var kibblesBtn2 = 0;
    var kibblesBtn3 = 0;
    var kibblesBtn4 = 0;

    //Initialization Part 2

    //Clicking Event
    $("body").on("click", ".btn-choice", function () {

        console.log(this.id);







    });





    function gameReset() {
        var goalKibbles = 0;
        var currKibbles = 0;

        getKibbleBtns();
    };

    function getKibbleBtns() {
        var isOdd = false;
        goalKibbles = Math.floor((Math.random() * 100) + 19)
        console.log(goalKibbles);
        isOdd = goalKibbles % 2 == 0;
        console.log(isOdd);

    };

});