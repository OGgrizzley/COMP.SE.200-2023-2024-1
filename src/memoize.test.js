import memoize from './memoize.js';

describe('memoize', () => {
    test('Memoization of Product Addition', () => {
      const mockAddProduct = jest.fn((product) => ({ ...product, added: true }));
      const memoizedAddProduct = memoize(mockAddProduct);
  
      const product1 = { name: 'Apple', price: 1.0 };
      const product2 = { name: 'Banana', price: 0.5 };
  
      // First call should invoke the original function and add the product
      expect(memoizedAddProduct(product1)).toEqual({ name: 'Apple', price: 1.0, added: true });
      expect(mockAddProduct).toHaveBeenCalledWith(product1);
  
      // Second call with the same product should use the cache
      expect(memoizedAddProduct(product1)).toEqual({ name: 'Apple', price: 1.0, added: true });
      // The original function should not be called again
      expect(mockAddProduct).toHaveBeenCalledTimes(1);
  
      // Call with a different product should invoke the original function
      expect(memoizedAddProduct(product2)).toEqual({ name: 'Banana', price: 0.5, added: true });
      expect(mockAddProduct).toHaveBeenCalledWith(product2);
    });
  });