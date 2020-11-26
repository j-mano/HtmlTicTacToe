// Loading in all clickable card from the gui.
element1 = document.getElementById("Card1");
element2 = document.getElementById("Card2");
element3 = document.getElementById("Card3");
element4 = document.getElementById("Card4");
element5 = document.getElementById("Card5");
element6 = document.getElementById("Card6");
element7 = document.getElementById("Card7");
element8 = document.getElementById("Card8");
element9 = document.getElementById("Card9");

// This funktion is made to be calld from the clickfunktion. the actual click is made in the html.
function Card1click(){
    console.log("card 1 clickt");
    if(currentplayer)
        setcardstate(0, 0, 1);
    else
        setcardstate(0, 0, 2);
}

function Card2click(){
    console.log("card 2 clickt");
    if(currentplayer)
        setcardstate(0, 1, 1);
    else
        setcardstate(0, 1, 2);
}

function Card3click(){
    console.log("card 3 clickt");
    if(currentplayer)
        setcardstate(0, 2, 1);
    else
        setcardstate(0, 2, 2);
}

function Card4click(){
    console.log("card 4 clickt");
    if(currentplayer)
        setcardstate(1, 0, 1);
    else
        setcardstate(1, 0, 2);
}

function Card5click(){
    console.log("card 5 clickt");
    if(currentplayer)
        setcardstate(1, 1, 1);
    else
        setcardstate(1, 1, 2);
}

function Card6click(){
    console.log("card 6 clickt");
    if(currentplayer)
        setcardstate(1, 2, 1);
    else
        setcardstate(1, 2, 2);
}

function Card7click(){
    console.log("card 7 clickt");
    if(currentplayer)
        setcardstate(2, 0, 1);
    else
        setcardstate(2, 0, 2);
}

function Card8click(){
    console.log("card 8 clickt");
    if(currentplayer)
        setcardstate(2, 1, 1);
    else
        setcardstate(2, 1, 2);
}

function Card9click(){
    console.log("card 9 clickt");
    if(currentplayer)
        setcardstate(2, 2, 1);
    else
        setcardstate(2, 2, 2);
}

function reset(){
    console.log("Resetbtn presset")
    resetgame();
}