function cardprintout(){
    // Printing out the cards
    // Row 1 Card 1
    if(possArray[0][0] == 0){
        document.getElementById('Card1').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card1').innerHTML = '<id = "card" />';
    }
    else if(possArray[0][0] == 1){
        document.getElementById('Card1').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card1').innerHTML = '<id = "card" />';
    }
    else if(possArray[0][0] == 2){
        document.getElementById('Card1').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card1').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card1').innerHTML = "state of card not set";

        
    // Row 1 Card 2
    if(possArray[0][1] == 0){
        document.getElementById('Card2').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card2').innerHTML = '<id = "card" />';
    }
    else if(possArray[0][1] == 1){
        document.getElementById('Card2').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card2').innerHTML = '<id = "card" />';
    }
    else if(possArray[0][1] == 2){
        document.getElementById('Card2').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card2').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card2').innerHTML = "state of card not set";

    // Row 1 Card 3
    if(possArray[0][2] == 0){
        document.getElementById('Card3').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card3').innerHTML = '<id = "card" />';
    }
    else if(possArray[0][2] == 1){
        document.getElementById('Card3').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card3').innerHTML = '<id = "card" />';
    }
    else if(possArray[0][2] == 2)
    {
        document.getElementById('Card3').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card3').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card3').innerHTML = "state of card not set";

    // Row 2 Card 1
    if(possArray[1][0] == 0){
        document.getElementById('Card4').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card4').innerHTML = '<id = "card" />';
    }
    else if(possArray[1][0] == 1){
        document.getElementById('Card4').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card4').innerHTML = '<id = "card" />';
    }
    else if(possArray[1][0] == 2){
        document.getElementById('Card4').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card4').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card4').innerHTML = "state of card not set";

    // Row 2 Card 2
    if(possArray[1][1] == 0){
        document.getElementById('Card5').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card5').innerHTML = '<id = "card" />';
    }
    else if(possArray[1][1] == 1){
        document.getElementById('Card5').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card5').innerHTML = '<id = "card" />';
    }
    else if(possArray[1][1] == 2){
        document.getElementById('Card5').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card5').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card5').innerHTML = "state of card not set";

    // Row 2 Card 3
    if(possArray[1][2] == 0){
        document.getElementById('Card6').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card6').innerHTML = '<id = "card" />';
    }
    else if(possArray[1][2] == 1){
        document.getElementById('Card6').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card6').innerHTML = '<id = "card" />';
    }
    else if(possArray[1][2] == 2){
        document.getElementById('Card6').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card6').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card6').innerHTML = "state of card not set";

    // Row 3 Card 1
    if(possArray[2][0] == 0){
        document.getElementById('Card7').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card7').innerHTML = '<id = "card" />';
    }
    else if(possArray[2][0] == 1){
        document.getElementById('Card7').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card7').innerHTML = '<id = "card" />';
    }
    else if(possArray[2][0] == 2){
        document.getElementById('Card7').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card7').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card7').innerHTML = "state of card not set";

    // Row 3 Card 2
    if(possArray[2][1] == 0){
        document.getElementById('Card8').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card8').innerHTML = '<id = "card" />';
    }
    else if(possArray[2][1] == 1){
        document.getElementById('Card8').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card8').innerHTML = '<id = "card" />';
    }
    else if(possArray[2][1] == 2){
        document.getElementById('Card8').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card8').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card8').innerHTML = "state of card not set";

    // Row 3 Card 3
    if(possArray[2][2] == 0){
        document.getElementById('Card9').style.backgroundImage = "url('Assets/Graphics/Cards/EmtyCard.png')";
        document.getElementById('Card9').innerHTML = '<id = "card" />';
    }
    else if(possArray[2][2] == 1){
        document.getElementById('Card9').style.backgroundImage = "url('Assets/Graphics/Cards/cross.png')";
        document.getElementById('Card9').innerHTML = '<id = "card" />';
    }
    else if(possArray[2][2] == 2){
        document.getElementById('Card9').style.backgroundImage = "url('Assets/Graphics/Cards/Circel.png')";
        document.getElementById('Card9').innerHTML = '<id = "card" />';
    }
    else
        document.getElementById('Card9').innerHTML = "state of card not set";
}