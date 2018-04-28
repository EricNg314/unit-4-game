

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


$(document).ready(function () {

    //Initialization Part 1
    var scoreWins = 0;
    var scoreLoss = 0;
    var goalKibbles = 0;
    var currKibbles = 0;
    var kibblesBtnArray = [];
    var kibblesBtn1 = $("#button-1");
    var kibblesBtn2 = $("#button-2");
    var kibblesBtn3 = $("#button-3");
    var kibblesBtn4 = $("#button-4");

    //Initialization Part 2
    gameReset();

    //Clicking Event
    $("body").on("click", ".btn-choice", function () {

        console.log(this.id);
        // update user pick() += 





    });



    function gameReset() {
        var goalKibbles = 0;
        var currKibbles = 0;

        goalKibbles = Math.floor(Math.random() * 100) + 19;
        // console.log(goalKibbles);
        getKibbleBtns();
    };

    function getKibbleBtns() {
        var isGoalOdd = false;
        var isKibbleBtnsOdd = false;
        var isSmallestValue = 9999; //Setting a value far above 0;

        for (var i = 0; i <= 3; i++) {
            kibblesBtnArray.push(Math.floor(Math.random() * 12) + 1);
        }
        // kibblesBtnArray = [2, 4, 6, 8]; //Used for debugging.
        console.log(kibblesBtnArray);

        //if goal is odd, check if all buttons are even. if TRUE then + 1 to smallest button.      
        isGoalOdd = (goalKibbles % 2 !== 0); //give isGoalOdd = true if goalKibble is odd.
        isSmallestValue = Math.min(...kibblesBtnArray);  
        if (isGoalOdd === true) {
            for (var i = 0; i <= 3; i++) {
                isKibbleBtnsOdd = kibblesBtnArray[i] % 2 !== 0; //give isKibbleBtnsOdd = true if goalKibble is odd.
                if (isKibbleBtnsOdd === true) {
                    break;
                }
            }
            if (isKibbleBtnsOdd === false) {
                for (var i = 0; i <= 3; i++) {
                    if (isSmallestValue === kibblesBtnArray[i]) {
                        kibblesBtnArray[i] += 1;
                        break;
                    }
                }
            }
        }
        // console.log(kibblesBtnArray);

        //TODO assign array variables to each button.
        kibblesBtn1.val(kibblesBtnArray[0]);
        kibblesBtn2.val(kibblesBtnArray[1]);
        kibblesBtn3.val(kibblesBtnArray[2]);
        kibblesBtn4.val(kibblesBtnArray[3]);
    };



});