/**Flip events card*/
function showCardDetails(cardId) {
  var targetCard = document.querySelector(`#${cardId}`);
  var targetCardBack = document.querySelector(`#${cardId}Back`);

  targetCard.classList.toggle('hidden')
  targetCardBack.classList.toggle('hidden')
}