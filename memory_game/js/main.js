console.log("Up and running!");
//variables listed below
var cards = ["Queen!","Queen!","King!","King!"];
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
cardsInPlay.push(cards[cardId]); 
if (cardsInPlay.length === 2) {
	checkForMatch()
}
console.log("User flipped " + cards[cardId]);
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

