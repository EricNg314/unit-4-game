

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

    //========== Initialization Part 1 ===================================================//
    var scoreWins = 0;
    var scoreLoss = 0;
    var goalKibbles = 0;
    var currKibbles = 0;
    var kibblesBtnArray = [];
    // var kibblesBtn1 = $("#button-1");
    // var kibblesBtn2 = $("#button-2");
    // var kibblesBtn3 = $("#button-3");
    // var kibblesBtn4 = $("#button-4");
    var catStatusImgArray = ["assets/images/cat_hungry.jpg", "assets/images/cat_unhappy.jpg", "assets/images/cat_happy.jpg"];
    var catStatusImg = catStatusImgArray[0]; //initializing.

    //========= Initialization Part 2 ====================================================//
    gameReset();
    outputDisplay()

    //========== Clicking Event ===================================================//
    $("body").on("click", ".btn-choice", function () {

        console.log(this.id);
        currKibbles += parseInt(this.value);
        catStatusImg = catStatusImgArray[0];

        //========== Clicking Event (Check if win/loss)===================================================//
        if (currKibbles === goalKibbles) {
            scoreWins++;
            catStatusImg = catStatusImgArray[2];
            gameReset();
        } else if (currKibbles > goalKibbles) {
            scoreLoss++;
            catStatusImg = catStatusImgArray[1];
            gameReset();
        }

        outputDisplay();
    });



    function gameReset() {
        goalKibbles = 0;
        currKibbles = 0;

        getKibbleBtns();
        getGoalKibbles();
        console.log("goal kibbles: " + goalKibbles);

    };

    function getKibbleBtns() {
        //====the commented information in this function should only be applied if goal is set prior to button values.====//
        // var isGoalOdd = false; 
        // var isKibbleBtnsOdd = false;
        // var isSmallestValue = 9999; //Setting a value far above 0;
        kibblesBtnArray.length = 0; //resetting for new games.

        for (var i = 0; i <= 3; i++) {
            kibblesBtnArray.push(Math.floor(Math.random() * 12) + 1);
        }
        console.log(kibblesBtnArray);

        //if goal is odd, check if all buttons are even. if TRUE then + 1 to smallest button.      
        // isGoalOdd = (goalKibbles % 2 !== 0); //give isGoalOdd = true if goalKibble is odd.
        // isSmallestValue = Math.min(...kibblesBtnArray);
        // if (isGoalOdd === true) {
        //     for (var i = 0; i <= 3; i++) {
        //         isKibbleBtnsOdd = kibblesBtnArray[i] % 2 !== 0; //give isKibbleBtnsOdd = true if goalKibble is odd.
        //         if (isKibbleBtnsOdd === true) {
        //             break;
        //         }
        //     }
        //     if (isKibbleBtnsOdd === false) { //if there's no odd, then goal is unsolvable. Make the lowest even value odd.
        //         for (var i = 0; i <= 3; i++) {
        //             if (isSmallestValue === kibblesBtnArray[i]) {
        //                 kibblesBtnArray[i] += 1;
        //                 break;
        //             }
        //         }
        //     }
        // }
        // console.log(kibblesBtnArray);

        //TODO assign array variables to each button.
        $("#button-1").val(kibblesBtnArray[0]);
        $("#button-2").val(kibblesBtnArray[1]);
        $("#button-3").val(kibblesBtnArray[2]);
        $("#button-4").val(kibblesBtnArray[3]);
    };


    function getGoalKibbles() {
        do {
            goalKibbles = 0;
            for (var i = 0; i < kibblesBtnArray.length; i++) {
                goalKibbles += kibblesBtnArray[i] * Math.floor(Math.random() * 5);
            }
        } while (goalKibbles <= 19 && goalKibbles >= 120);
    }


    function outputDisplay() {
        var htmlGoalKibble = goalKibbles;
        var htmlCurrKibble = currKibbles;
        $("#imgWinLoss").attr('src', catStatusImg);
        $("#winKitty").text(scoreWins);
        $("#lossKitty").text(scoreLoss);
        $("#computer-pick").text(htmlGoalKibble);
        $("#user-pick").text(htmlCurrKibble);
    }

});