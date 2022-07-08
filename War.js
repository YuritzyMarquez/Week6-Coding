const SUITS = ["heart", "clubs", "diamonds", "spades"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  
class Deck {
    constructor(cards = combination()) {
        this.cards = this.cards;
    let deck = [];
    }
    
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
             const newCard = Math.floor(Math.random() * (i + 1))
            const oldCard = this.cards[newCard]
            this.cards[newCard] = this.cards[i]
            this.cards[i] = oldCard
    
        }   
    }
}

class Cards {
    constructor(suits, values) {
        this.suits = suits;
        this.values = values;
    }
}

function combination () {
    return SUITS.flatMap(suits =>{
        return VALUES.map(values => {
            return new Cards(suits, values)
        })
    })
}

class Player {
    constructor (Aphelios, Seraphine) {
        this.Aphelios = Aphelios;
        this.Seraphine = Seraphine;
    }

}

function competitors(stacks) {
    let deck = [];
    for (let i = 1; i <= 26; i++) {
        deck.push(stacks.shift());
    }
    return deck;
}

function singleCard (singles) {
    return singles.shift();
}

function startGame (Aphelios, Seraphine) {
    let card = 26;
    let Aphelios_card = 0;
    let Aphelios_score = 0;
    let Seraphine_card = 0;
    let Seraphine_score = 0;
    while (card != 0) {
        Aphelios_card = Aphelios.shift();
        Seraphine_card = Seraphine.shift();
    }

    if (Aphelios_card > Seraphine_card) {
        console.log("Aphelios Wins!");
        Aphelios_score++;
    } else if(Aphelios_card < Seraphine_card) {
        console.log("Seraphine Wins!")
        Seraphine_score++
    } else {
        console.log("It's a Draw! Both get NATHING!") 
            card--;
        }
    console.log("Aphelios score: " + Aphelios_score + "Seraphine score: " + Seraphine_score);
        if (Seraphine_score > Aphelios_score) {
            console.log("Seraphine is the Winner!");
        } else if(Seraphine_score < Aphelios_score) {
            console.log("Aphelios is the Winner!");
        }else{
        console.log("You both suck!");
        }
        return 1;
 }

let deck = Deck;
 let competitors_Aphelios = competitors(deck);
 let competitors_Seraphine = competitors(deck);
 startGame(competitors_Aphelios, competitors_Seraphine);
