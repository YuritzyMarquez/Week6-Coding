function cardStack () {  //this creates the 52 card deck used to play war
    let deck = [];
    let start = 1;
    for (let i = 1; start <= 4; i++) {
        deck.push(i);
        if (i === 13) {
            i = 0;
            start++;
        }
    }
    return deck;
}

function shuffle(cards) {    // this function is to shuffle the cards randomly to be prepared to be dealt to each player
    let currentIndex = cards.length;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
    return cards;
}

function player(competitors) {   // this function is used to deal 26 cards to the 2 players in the game
    let deck = [];
    for (let i = 1; i <= 26; i++) {
        deck.push(competitors.shift());
    }
    return deck;
}

function card(singles) {      // this takes the deck array .shift takes the first element of the array (the card) then removes it from the array
    return singles.shift();
}

function start_game(player1, player2) {  // this function is where the game starts once you run the code on live server
    let card = 26;
    let Draven_card = 0;
    let Seraphine_card = 0;
    let Draven_score = 0;
    let Seraphine_score = 0;
    while (card != 0) {               // this while loop is telling th computer that as long as there is cards to be played, keep playing
        Draven_card = player1.shift();      // arr is player 1 deck
        Seraphine_card = player2.shift();      // array is player 2 deck 
        if (Draven_card > Seraphine_card) {
            console.log("Draven is the victor! Reward = 1 point");
            Draven_score++;
        }
        else if (Draven_card < Seraphine_card) {
            console.log("Seraphine is the victor! Reward = 1 point");
            Seraphine_score++;
        }
        else {
            console.log("You both get NATHING!");
        }
        card--;
    }
    console.log("Draven's score: " + Draven_score + " Seraphine's score: " + Seraphine_score);   // this is used to print out the score after each round
    if (Draven_score > Seraphine_score) {
        console.log("Draven has won the War!");
    }
    else if (Draven_score < Seraphine_score) {
        console.log("Seraphine has won the War!");
    }
    else {
        console.log("You both tied, you suck!");
    }
    console.log("Draven's score: " + Draven_score + " Seraphine's score: " + Seraphine_score);
    return 1;
}

let deck = (shuffle(cardStack()));  //this creates a deck and suffles it before the game starts
let player_Draven = player(deck);  //for line 74 and 75 it deals 26 cards to those 2 players
let player_Seraphine = player(deck);
start_game(player_Draven, player_Seraphine);