

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
    var catStatusImgAltArray = ["A hungry cat begging", "Grumpy cat is mad", "Smiling cat"];
    var catStatusImg = catStatusImgArray[0]; //initializing.
    var catStatusImgAlt = catStatusImgAltArray[0]; //initializing.

    //========= Initialization Part 2 ====================================================//
    play_initial_sound();
    gameReset();
    outputDisplay()

    $("#helpBtn").click(function () {
        console.log("working");
        $('html, body').animate({
            scrollTop: $("#instructions").offset().top
        }, 1000);
    });




    //========== Clicking Event ===================================================//
    $("body").on("click", ".btn-choice", function () {

        //=======Animation ending detection BEGIN========/
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));
        //=======Animation ending detection END========/

        //======Adding animation to element ========/
        $("#" + this.id).addClass('animated bounce').one(animationEnd, function () {
            $("#" + this.id).removeClass('animated bounce'); //Removing animation class to reset
        });


        currKibbles += parseInt(this.value);
        catStatusImg = catStatusImgArray[0];

        //========== Clicking Event (Check if win/loss)===================================================//
        if (currKibbles === goalKibbles) {
            scoreWins++;
            catStatusImg = catStatusImgArray[2];
            catStatusImgAlt = catStatusImgAltArray[2];
            play_win_sound();
            gameReset();
        } else if (currKibbles > goalKibbles) {
            scoreLoss++;
            catStatusImg = catStatusImgArray[1];
            catStatusImgAlt = catStatusImgAltArray[1];
            play_lose_sound()
            gameReset();
        }

        outputDisplay();
    });



    function gameReset() {
        goalKibbles = 0;
        currKibbles = 0;
        getKibbleBtns();
        getGoalKibbles();
    };

    function getKibbleBtns() {
        //=========The commented information in this function should only be applied if goal is set prior to button values.=========//
        // var isGoalOdd = false; 
        // var isKibbleBtnsOdd = false;
        // var isSmallestValue = 9999; //Setting a value far above 0;
        kibblesBtnArray.length = 0; //resetting for new games.

        for (var i = 0; i <= 3; i++) {
            kibblesBtnArray.push(Math.floor(Math.random() * 12) + 1);
        }
        // console.log(kibblesBtnArray);

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
        } while (goalKibbles <= 19 || goalKibbles >= 120);
    }


    function outputDisplay() {
        var htmlGoalKibble = goalKibbles;
        var htmlCurrKibble = currKibbles;
        $("#imgWinLoss").attr('src', catStatusImg);
        $("#imgWinLoss").attr('alt', catStatusImgAlt);
        $("#winKitty").text(scoreWins);
        $("#lossKitty").text(scoreLoss);
        $("#computer-pick").text(htmlGoalKibble);
        $("#user-pick").text(htmlCurrKibble);
    }
    function play_initial_sound() {
        document.getElementById('audioTagInitial').play();
    }
    function play_win_sound() {
        document.getElementById('audioTagWin').play();
    }
    function play_lose_sound() {
        document.getElementById('audioTagLose').play();
    }

});