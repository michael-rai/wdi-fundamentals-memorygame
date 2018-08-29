console.log("Up and running!");
//variables listed below
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
},
];

var cardsInPlay = [];
//functions below
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
};
};
var flipCard = function (cardId) {
//	var cardId = cards[0,1,2,3];
//console.log("User flipped " + cardId);
cardsInPlay.push(cards[cardId].rank); 
if (cardsInPlay.length === 2) {
	checkForMatch()
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
console.log("User flipped " + cards[cardId].rank);
/*
console.log("User flipped " + cardId);
cardsInPlay.push(cards[cardId]);
*/
};
flipCard(0);
flipCard(2);

if (cardsInPlay.length === 2) {

}if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
} else {alert("Sorry, try again.")};

