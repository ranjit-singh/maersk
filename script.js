(function() {
  const cardList = [
  {
    className: "card card-bg1",
    value: 1
  },
  {
    className: "card card-bg2",
    value: 2
  },
  {
    className: "card card-bg3",
    value: 3
  },
  {
    className: "card card-bg2",
    value: 4
  },
  {
    className: "card card-bg3",
    value: 5
  },
  {
    className: "card card-bg4",
    value: 6
  },
  {
    className: "card card-bg4",
    value: 7
  },
  {
    className: "card card-bg1",
    value: 8
  },
  {
    className: "card card-bg3",
    value: 9
  }
  ];
  loadCards = (cards) => {
    const cardCotainer = document.getElementById('cardList');
    cardCotainer.innerHTML = '';
    cards.forEach((card) => {
      const divElm = document.createElement('div');
      divElm.setAttribute('class', card.className);
      const spanElm = document.createElement('span');
      spanElm.innerHTML = card.value;
      divElm.appendChild(spanElm);
      cardCotainer.appendChild(divElm);
    });
  }
  document.getElementById('shuffleButton').addEventListener('click', () => {
    loadCards(shuffleCard(cardList));
  });
  document.getElementById('sortButton').addEventListener('click', () => {
    loadCards(sortCards(cardList));
  });

  shuffleCard = (cards) => {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}

sortCards = (cards) => {
  return cards.sort((a, b) => { return a.value - b.value; });
}
loadCards(cardList);
}());
