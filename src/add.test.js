import add from './add.js';

describe('add.js - Addition Functionality', () => {
  // Test case 1: Adding positive quantities of products
  test('Adds two positive quantities correctly', () => {
    const result = add(3, 2);
    expect(result).toBe(5);
  });

  // Test case 2: Adding negative quantities of products
  test('Adds two negative quantities correctly', () => {
    const result = add(-3, -2);
    expect(result).toBe(-5);
  });

  // Test case 3: Adding a positive quantity and a negative quantity
  test('Adds a positive and a negative quantity correctly', () => {
    const result = add(3, -2);
    expect(result).toBe(1);
  });

  // Test case 4: Adding zero quantity to a quantity
  test('Adds zero quantity to a quantity correctly', () => {
    const result = add(3, 0);
    expect(result).toBe(3);
  });

  // Test case 5: Adding two zero quantities
  test('Adds two zero quantities correctly', () => {
    const result = add(0, 0);
    expect(result).toBe(0);
  });

  // Test case 6: Adding fractional quantities
  test('Adds fractional quantities correctly', () => {
    const result = add(1.5, 2.5);
    expect(result).toBe(4);
  });

  // Test case 7: Adding large quantities
  test('Adds large quantities correctly', () => {
    const result = add(1000000, 500000);
    expect(result).toBe(1500000);
  });
});
