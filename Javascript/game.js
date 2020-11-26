// The explaineing text in these documents are writen in that sense that the future editors know the game tick tack toe

// This js script is the main js script in this game controlling majority of the game.

// Keys keep track of keyboard keystroke. Not in use for this game but may bee in future update or port to sertend devices.
var keys        = [];

// Keeps track of the framerate in the game. Not displayd in game in this version.
var fps         = 0;
var lastCalledTime;

var gameState = "running";

document.body.onkeydown = function(e) {
	keys[e.keyCode] = true;
	console.log("key: " + e.keyCode);
};

document.body.onkeyup = function(e) {
	keys[e.keyCode] = false;
};

// The main update function in this game. update graphics and gamestate.
function update() {
    delta = (Date.now() - lastCalledTime) / 1000;
    lastCalledTime = Date.now();

    if(!lastCalledTime) {
        lastCalledTime = Date.now();
        fps = 0;
        return;
    }
    fps = 1 / delta;

    if(gameState == "running"){
        // Printing out the cards
        cardprintout();

        allSpacesFilled();
        check3inrow();
        checkstate();
    }

    setTimeout(function () {
        update();
    }, 20);
}

update();

// This funktion is checking the current gamestate-string and do actions and print messenges acordingly.
function checkstate(){
    switch (gameState)
    {
        case "gameEnded":
            document.getElementById("textdiv").innerHTML = "The game is over, Please reset to play another round";
            break;
        case "circleWon":
            document.getElementById("textdiv").innerHTML = "Circle won the game, Please reset to play another round";
            break;
        case "crosseWon":
            document.getElementById("textdiv").innerHTML = "Cross won the game, Please reset to play another round";
            break;
        case "3InRow":
            document.getElementById("textdiv").innerHTML = "3 in a row, Please reset to play another round";
            break;
        default:
            document.getElementById("textdiv").innerHTML = "";
    }
}

// this funktion is checking wining condition of the game itself. it checking compaird to the mainarray of cardstates in parameters.js
function check3inrow(){
    var sameofhorisont = 0;
    var sameofvertical = [];
    var sameofline     = 0;

    var prevfhorisont = 0;

    var x = 0;
    var y = 0;

    possArray.forEach(card => {
        card.forEach(card2 => {
            // Horisontal check. Save the old one in memory and check future state of each card.
            if(sameofvertical.length <= y)
                sameofvertical.push(0);

            if(prevfhorisont == card2 && card2 != 0){
                sameofhorisont = sameofhorisont + 1;

                if(sameofhorisont >= 3){
                    console.log("3 in row horisontal.")
                    return;
                }
            }
            prevfhorisont = card2;

            // Vertical check. create an array line foreach y line and save the old values there and compair these values.
            x2 = x - 1;
            y2 = y - 1;
            x3 = x - 2;
            y3 = y - 2;

            y4 = y + 1;
            y5 = y + 2;

            if(x > 0){
                if(possArray[x2][y] == card2 && card2 != 0){
                    sameofvertical[y] = sameofvertical[y] + 1;
                }
            }

            if(sameofvertical[y] >= 2){
                console.log("3 in row vertical.")
                gameState = "3InRow";
                return;
            }

            if(sameofvertical[y] >= 2){
                console.log("3 in row vertical.")
                gameState = "3InRow";
                return;
            }

            // Checking horisontal + vertical and 3 at the time compaird to horisontal and vertical check.
            if(x > 1 && y > 1){
                if(possArray[x2][y2] == card2 && possArray[x3][y3] == card2 && card2 != 0){
                    console.log("3 in row.")
                    return;
                }
            }

            if(x > 1 && y < (card.length-1)){
                if(possArray[x2][y4] == card2 && possArray[x3][y5] == card2 && card2 != 0){
                    console.log("3 in row.")
                    gameState = "3InRow";
                    return;
                }
            }

            // keeps track on what horisontal line you are on.
            y = y + 1;
        });

        sameofhorisont = 0;
        y = 0;
        x = x + 1;
    });
}

function allSpacesFilled(){
    var nozerovalue = false;

    possArray.forEach(card => {
        card.forEach(card2 => {
            if(card2 == 0){
                nozerovalue = true;
            }
        });
    });

    if(nozerovalue == false){
        gameState = "gameEnded"
        console.log(gameState);
    }
}

// Reseting the game itself to restart it.
function resetgame(){
    console.log("Reseting the game");
    var x = 0;
    var y = 0;

    // Scaning throge the locationarray and setting the stat of all cards to null.
    possArray.forEach(card => {
        card.forEach(card2 => {
            possArray[x][y] = 0;
            y = y + 1;
        });

        y = 0;
        x = x + 1;
    });

    gameState = "running";
    console.log(gameState);
}

// Setting the state of the selected card in the array. The array shoude be aligend with the interface in the game. state 0 = empty 1 = circle 2 = cross
function setcardstate(posx, posy, state){
    if(gameState == "running"){
        possArray[posx][posy] = state;
        console.log("State changed of card pos: " + posx + " , " + posy)

        if(currentplayer == true)
            currentplayer = false;
        else
            currentplayer = true;
    }
    else{
        console.log("The game has ended");
    }
}