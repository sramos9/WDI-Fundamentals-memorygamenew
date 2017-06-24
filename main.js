console.log("Up and running!");

//object with properties of the cards
var cards = [
{	
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];


var checkForMatch = function () {
	if (cardsInPlay.length === 2);
		if (cardsInPlay [0] === cardsInPlay[1]) {
			alert("you found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
	};

	var flipCard = function () {
		var cardId = this.getAttribute('data-id');
		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		cardsInPlay.push(cardId);
		this.setAttribute('src', cards[cardId].cardImage);
		console.log(cardsInPlay.length, "is cardsInPlay.length in function")
		if (cardsInPlay.length === 2) {
		checkForMatch();
	}
 	};
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	console.log(cardElement);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
	};
createBoard();

