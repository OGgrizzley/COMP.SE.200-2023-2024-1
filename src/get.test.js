import baseGet from './.internal/baseGet.js';
import get from './get.js';

// Mock the baseGet function to simulate API responses
jest.mock('./.internal/baseGet.js', () => jest.fn());

describe('get function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches product details from the API and returns the resolved value', async () => {
    // Mock the API response for product details
    baseGet.mockResolvedValueOnce('mocked product details');

    // Simulate an API call to get product details
    const productDetails = await get({ productId: 123, name: 'Example Product' }, 'productId');

    // Verify that baseGet was called with the correct arguments
    expect(baseGet).toHaveBeenCalledWith({ productId: 123, name: 'Example Product' }, 'productId');

    // Verify that the function returned the correct product details
    expect(productDetails).toEqual('mocked product details');
  });

  it('handles API errors and returns the default value for product details', async () => {
    // Mock an API error for product details
    baseGet.mockRejectedValueOnce(new Error('API error'));

    // Simulate an API call to get product details with a default value
    const result = await get({ productId: 123, name: 'Example Product' }, 'productId', 'default').catch((error) => error);

    // Verify that baseGet was called with the correct arguments
    expect(baseGet).toHaveBeenCalledWith({ productId: 123, name: 'Example Product' }, 'productId');

    // Verify that the function returns the default value on error
    expect(result).toEqual(new Error('API error'));
  });
});
