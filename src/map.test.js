import map from './map.js';

// Test case 3: Update cart quantities
function updateCartQuantity(item) {
  return { ...item, quantity: item.quantity + 1 };
}

test('map should update cart quantities correctly', () => {
  const cart = [
    { id: 1, name: 'Product A', quantity: 2 },
    { id: 2, name: 'Product B', quantity: 1 },
  ];

  const updatedCart = map(cart, updateCartQuantity);

  const expectedCart = [
    { id: 1, name: 'Product A', quantity: 3 },
    { id: 2, name: 'Product B', quantity: 2 },
  ];

  expect(updatedCart).toEqual(expectedCart);
});

// Test case 4: Convert prices to a different currency
function convertToEuros(item) {
  return { ...item, price: item.price * 0.85 }; // Assuming 1 USD = 0.85 Euros
}

test('map should convert prices to Euros correctly', () => {
  const products = [
    { id: 1, name: 'Product A', price: 20 },
    { id: 2, name: 'Product B', price: 15 },
  ];

  const productsInEuros = map(products, convertToEuros);

  const expectedProducts = [
    { id: 1, name: 'Product A', price: 17 },
    { id: 2, name: 'Product B', price: 12.75 },
  ];

  expect(productsInEuros).toEqual(expectedProducts);
});


