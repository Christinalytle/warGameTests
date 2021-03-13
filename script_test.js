var expect = chai.expect;  


describe('PlayerFunctions', function() {
    describe('#addHand', function() { //Test addHand function in the player's class 
        it ('should push an array to the empty this.hand array', function() {
            let player1 = new Player('Player 1'); //create a new player 
            let deck = [1,2,3,4,5];  //make up a deck of cards 
            var x = player1.addHand(deck);  
            expect(x).to.be.an('array').that.includes(2); 
        });
    });
    
    describe('#incrementScore', function() {
        it ("it should add 1 to the player's score", function() {
            let player2 = new Player('Player 2'); //create a new player 
            let x = player2.incrementScore(); //call incrementScore to check if it's one
            expect(x).to.equal(1); 
        })
    })
});

describe('DeckFunctions', function() {
    describe('#createDeck', function() {
        it('should create an array of 52 cards', function() {
            let mainDeck = new Deck(); //create a new deck
            var x = mainDeck.createDeck(); //call createDeck to add 52 cards 
            expect(x).to.have.lengthOf(52); 
        });
    });
    describe('#shuffle', function() {
        it('should shuffle an array of 52 cards', function() {
            let mainDeck = new Deck(); //create a new deck
            mainDeck.createDeck();  //add 52 cards 
            let x = mainDeck.shuffle(); //shuffle the 52 cards 
            expect(x).to.have.lengthOf(52); //test that it comes back with 52 cards 
         });
    });
});


describe('GameFunctions', function() {
    describe('#dealCards', function() {
        it('should split deck in two and deal to each player', 
        function() {
            let mainDeck = new Deck(); //create a new deck
            mainDeck.createDeck();  //add cards to that deck
            mainDeck.shuffle();  //shuffe that deck
            let player1 = new Player('Player 1'); //create a new player 
            let player2 = new Player('Player 2'); //create another player 
            let x = dealCards(player1, player2, mainDeck); //deal the mainDeck to the playrs
            expect(x).to.have.lengthOf(26);  //each player should have 26 cards 
        })
    })
    describe('#compareHand', function() {
        it('should add one to player score', function() {
            let mainDeck = new Deck(); //create a new deck
            mainDeck.createDeck();  //add cards to that deck
            mainDeck.shuffle();  //shuffle deck
            let player1 = new Player('Player 1'); //create a new player  
            let player2 = new Player('Player 2');  //create another player 
            dealCards(player1, player2, mainDeck); //deal cards to each player 
            let score = compareHand(player1, player2);  //compare the first hand
            expect(score).to.equal(1); //a player should have 1 to their score 
        }); 
        it('should determine a tie', function() {
            const tie = compareHand({hand: [{value: 5}]}, {hand: [{value: 5}]}); //push a value into the function that are equal
            expect(tie).to.equal(0); 
        })
    });
    describe('#playGame', function() {
        it('should play game until all cards are gone', function() {
            let mainDeck = new Deck(); //create a new deck
            mainDeck.createDeck();  //add cards to that deck 
            mainDeck.shuffle(); //shuffle the deck 
            let player1 = new Player('Player 1'); //create a player 
            let player2 = new Player('Player 2'); //create another player 
            dealCards(player1, player2, mainDeck); //deal cards to each player 
            let spy = chai.spy.on(console, 'log'); //spy on the console to see how many times the game has been played 
            playGame(player1, player2); //play game 
            expect(spy).to.have.been.called.exactly(26); //the game should be played 26 times (until  all cards are gone)   
        })
    })
});
