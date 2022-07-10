function cardStack () {  //52 cards are created with this function.
    let deck = [];
    let start = 1;
    for (let i = 1; start <= 4; i++) {   //this makes only 4 suits available such as clubs, spades, diamonds, hearts.
        deck.push(i);
        if (i === 13) {     //this makes only 13 values for the card such as Ace through the King. 
            i = 0;
            start++; //this makes the value never be under 1.
        }
    }
    return deck;
}

function shuffle(cards) {    // this just shuffles the card.
    let currentIndex = cards.length;   

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);   //randomizes the shuffle 
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
    return cards;
}

function player(competitors) {   // only gives the players 26 cards each. 
    let deck = [];
    for (let i = 1; i <= 26; i++) {    //doesn't let the number of cards given be greater then 26.
        deck.push(competitors.shift());
    }
    return deck;
}

function card(singles) {      // this takes the first card from the deck with the .shift()
    return singles.shift();
}

function start_game(player1, player2) {  
    let card = 26;
    let Draven_card = 0;
    let Seraphine_card = 0;
    let Draven_score = 0;
    let Seraphine_score = 0;
    while (card != 0) {               // this loop will let the game continue as long as their cards left to play.
        Draven_card = player1.shift();      
        Seraphine_card = player2.shift();      
        if (Draven_card > Seraphine_card) {
            console.log("Draven is the victor! Reward = 1 point");
            Draven_score++;
        }                                                                            //lines 44-58 allow the players to play cards and show a clear winner if the value of a card is higher then the other. 
        else if (Draven_card < Seraphine_card) {
            console.log("Seraphine is the victor! Reward = 1 point");
            Seraphine_score++;
        }
        else {
            console.log("You both get NATHING!");
        }
        card--;
    }
    console.log("Draven's score: " + Draven_score + " Seraphine's score: " + Seraphine_score);   // lines 59-69 prints the end score of each player but also compares them to determine a winner
    if (Draven_score > Seraphine_score) {
        console.log("Draven has won the War!");
    }
    else if (Draven_score < Seraphine_score) {
        console.log("Seraphine has won the War!");
    }
    else {
        console.log("You both tied, you suck!");
    }
}

let deck = (shuffle(cardStack()));  //te deck is shuffled before the beginning of the game
let player_Draven = player(deck);  
let player_Seraphine = player(deck);
start_game(player_Draven, player_Seraphine);  //the cards are delt to each player 