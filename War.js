const SUITS = ["heart", "clubs", "diamonds", "spades"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  
class Deck {
    constructor(cards) {
        this.cards = this.cards;
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

function shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const newCard = Math.floor(Math.random() * (i + 1))
        const oldCard = this.cards[newCard]
        this.cards[newCard] = this.cards[i]
        this.cards[i] = oldCard

    }
}