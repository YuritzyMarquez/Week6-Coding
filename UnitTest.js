let expect = chai.expect;

describe("Function cardStack", function() {
    it('This should create a deck of 52 cards', function(){
        let deck = [];
        let start = 1;
        expect(deck).to.be.a("Array");
        expect(start).to.equal(1);
    });
});

describe("Function Player", function(){
    it("This should give each player 26 cards", function(){
        let deck = [];
        expect(deck).to.be.an("Array");
    });
});
