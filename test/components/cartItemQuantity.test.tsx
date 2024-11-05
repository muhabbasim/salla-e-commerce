import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import CartItemQuantity from '../../src/components/carts/cartItemQuantity';

// Define the mock functions for the useShoppingCart hook
const increaseCartQuantity = vi.fn();
const decreaseCartQuantity = vi.fn();
const addQuantityCartQuantity = vi.fn();

// here i mock the useShoppingCart hook and toast library at the top of the test file
vi.mock('../../src/context/CartContext', () => ({
  useShoppingCart: vi.fn(() => ({
    increaseCartQuantity,
    decreaseCartQuantity,
    addQuantityCartQuantity,
  })),
}));

describe('CartItemQuantity Component', () => {

  afterEach(() => {
    vi.clearAllMocks(); // Clear mocks between tests
  });

  // This test render Initial Quantity
  it('should render the initial quantity', () => {
    render(<CartItemQuantity productId={1} quantity={3} />);
    
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(3);
  });

  // This test increase Quantity with "+" Button
  it('should increase quantity when "+" button is clicked', () => {
    render(<CartItemQuantity productId={1} quantity={3} />);
    
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    // Verify `increaseCartQuantity` was called
    expect(increaseCartQuantity).toHaveBeenCalledWith(1);
  });

  // This test decrease Quantity with "-" Button
  it('should decrease quantity when "-" button is clicked', () => {
    render(<CartItemQuantity productId={1} quantity={3} />);
    
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);

    // Verify `decreaseCartQuantity` was called
    expect(decreaseCartQuantity).toHaveBeenCalledWith(1);
  });


  // This test update Quantity with via input change
  it('should update quantity when input value is changed', () => {
    render(<CartItemQuantity productId={1} quantity={3} />);
    
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '5' } });

    // Verify `addQuantityCartQuantity` was called with new value
    expect(addQuantityCartQuantity).toHaveBeenCalledWith(1, 5);
  });

  it('should prevent invalid quantity input', () => {
    render(<CartItemQuantity productId={1} quantity={3} />);
    
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '-1' } });

    // Ensure `addQuantityCartQuantity` is not called for invalid values
    expect(addQuantityCartQuantity).not.toHaveBeenCalled();
  });
});
