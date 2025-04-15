window.onload = function () {

  //definir la carta
  const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const SUITS = [
    { symbol: '♥', name: 'heart' },
    { symbol: '♦', name: 'diamond' },
    { symbol: '♣', name: 'club' },
    { symbol: '♠', name: 'spade' }
  ];


  //seleccionar elementos
  const cardElement = document.getElementById('card');
  const cardTop = document.querySelector('.card-top');
  const cardCenter = document.querySelector('.card-center');
  const cardBottom = document.querySelector('.card-bottom');

  //generador de carta aleatoria
  const randomValue = VALUES[Math.floor(Math.random() * VALUES.length)];
  const randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];

  // aplicar clases y contenido a la carta
  cardElement.className = 'card ' + randomSuit.name;
  cardTop.textContent = randomSuit.symbol;
  cardCenter.textContent = randomValue;
  cardBottom.textContent = randomSuit.symbol;

}
