import reduce from './reduce.js';

describe('Shopping Cart Management', () => {
  test('should update shopping cart with product prices', () => {
    const cartItems = [
      { product: 'Item A', price: 10 },
      { product: 'Item B', price: 20 },
      { product: 'Item C', price: 30 },
    ];

    const totalPrice = reduce(cartItems, (acc, item) => acc + item.price, 0);

    expect(totalPrice).toBe(60);
  });
});

