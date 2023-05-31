console.log('Lodash is loaded:', typeof _ !== 'undefined');

function createPlayers() {
  const players = [
    {name: 'Player 1',
     hand: [],
    },
    {
      name: 'Player 2',
      hand: [],
    },
    {
      name: 'Player 3',
      hand: [],
    },
    {
      name: 'Player 4',
      hand: [],
    }
  ];

  return players;
}

function createDeck() {
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  const rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '10', 'Jack', 'Queen', 'King'];
  const deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      const card = {};
      card.suit = suits[i];
      card.rank = rank[j];
      deck.push(card);
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  return _.shuffle(deck);
}

function deal(players, shuffleDeck) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < 2; j++) {
      players[i].hand.push(shuffleDeck.pop());
    }
  }

  return players;
}

function calculateScore(players) {
  const playerScores = [];
  const winner = {name: '', score: 0};
  let score;
  let player;
  let max = 0;
  for (let i = 0; i < players.length; i++) {
    score = 0;
    player = {};
    for (let j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j].rank === 'Ace') {
        score += 11;
      } else if (players[i].hand[j].rank === 'King' || players[i].hand[j].rank === 'Queen' || players[i].hand[j].rank === 'Jack') {
        score += 10;
      } else {
        score += Number(players[i].hand[j].rank);
      }
    }
    player.name = players[i].name;
    player.score = score;
    playerScores.push(player);

    if (score > winner.score) {
      winner.name = players[i].name;
      winner.score = score;
    }
  }

  console.log(`Winner: ${winner.name} (${winner.score} points)`);

  // Returns score of each player
  return playerScores;
}

const displayWinner = calculateScore(deal(createPlayers(), shuffleDeck(createDeck())));
console.log(displayWinner);
