const orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    orderPlaced: '2020-08-04',
    totalPrice: 34.0,
    shipTo: 'JS Masher',
    items: [
      {
        category: 'book',
        title: 'JavaScript for impatient programmers',
        author: 'Dr. Axel Rauschmayer',
        returnWindow: '2020-09-07',
        orderDelivered: '2020-08-08',
        price: 31.55,
      }
    ]
  },
  {
    orderNumber: '113-9984268-1280257',
    orderPlaced: '2020-07-19',
    totalPrice: 44.53,
    shipTo: 'JS Masher',
    items: [
      {
        category: 'book',
        title: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        returnWindow: '2020-08-19',
        orderDelivered: '2020-07-20',
        price: 41.33,
      }
    ]
  },
  {
    orderNumber: '114-2875557-9059409',
    orderPlaced: '2020-07-04',
    totalPrice: 17.22,
    shipTo: 'JS Masher',
    items: [
      {
        category: 'video games',
        title: 'Gamecube Controller Adapter',
        returnWindow: '2020-08-05',
        orderDelivered: '2020-07-07',
        price: 15.98,
      }
    ]
  },
  {
    orderNumber: '113-2883177-2648248',
    orderPlaced: '2020-07-03',
    totalPrice: 138.93,
    shipTo: 'JS Masher',
    items: [
      {
        category: 'video games',
        title: 'GameCube Controller',
        returnWindow: '2020-08-04',
        orderDelivered: '2020-07-05',
        price: 94.95
      },
      {
        category: 'book',
        title: 'The Art of Sql',
        author: 'Stephane Faroult',
        returnWindow: '2020-08-04',
        orderDelivered: '2020-07-05',
        price: 33.99
      }
    ]
  }
];

console.log('value of order-history:', orderHistory);
