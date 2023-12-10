import filter from './filter.js';

describe('Filter function', () => {
  const products = [
    { id: 1, price: 10, contents: 'Product A', producer: 'Producer X' },
    { id: 2, price: 20, contents: 'Product B', producer: 'Producer Y' },
    { id: 3, price: 15, contents: 'Product C', producer: 'Producer X' },
  ];

  test('Filters products based on price', () => {
    const filteredProducts = filter(products, ({ price }) => price > 15);
    expect(filteredProducts).toEqual([
      { id: 2, price: 20, contents: 'Product B', producer: 'Producer Y' },
    ]);
  });

  test('Filters products based on contents', () => {
    const filteredProducts = filter(products, ({ contents }) => contents.includes('Product A'));
    expect(filteredProducts).toEqual([
      { id: 1, price: 10, contents: 'Product A', producer: 'Producer X' },
    ]);
  });

  test('Filters products based on producer', () => {
    const filteredProducts = filter(products, ({ producer }) => producer === 'Producer X');
    expect(filteredProducts).toEqual([
      { id: 1, price: 10, contents: 'Product A', producer: 'Producer X' },
      { id: 3, price: 15, contents: 'Product C', producer: 'Producer X' },
    ]);
  });
});