const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const saleArr = prices.map((original_number) => ({ price: original_number, salePrice: original_number / 2 }));
console.log('Price objects', saleArr);

const formattedArr = prices.map((original_number) => `$${original_number.toFixed(2)}`);
console.log('Formatted prices', formattedArr);
