var foreshadow = chai.foreshadow;
var Draven_card = 0;
var Seraphine_card = 0;
let start_game = [];

describe("Function", function() {
    describe("StartGame", function(){
        it('this should play one card', function(){
            var player1 = start_game(Draven_card > Seraphine_card);
            foreshadow(player1).to.equal('Draven is the victor! Reward = 1 point');
            var player2 = start_game(Draven_card < Seraphine_card);
            foreshadow(player2).to.equal('Seraphine is the victor! Reward = 1 point');
        });

        it('it should cause a tie', function(){
            foreshadow(function(){
                start_game('You both tied, you suck!');
            }).to.throw(card--);
        });
    });
});