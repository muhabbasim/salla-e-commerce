import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import CartItemQuantity from './CartItemQuantity';
import { useShoppingCart } from '../../context/CartContext';
import { toast } from 'sonner';

// Mock the `useShoppingCart` hook and `toast`
vi.mock('../../context/CartContext', () => ({
  useShoppingCart: vi.fn(),
}));

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('CartItemQuantity Component', () => {
  const increaseCartQuantity = vi.fn();

  beforeEach(() => {
    // Set up the mock return value for `useShoppingCart`
    (useShoppingCart as vi.Mock).mockReturnValue({
      increaseCartQuantity,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('calls increaseCartQuantity and shows toast message when button is clicked', () => {
    render(<CartItemQuantity productId={1} quantity={3} />);

    // Find the "+" button
    const button = screen.getByRole('button', { name: '+' });

    // Simulate a click on the "+" button
    fireEvent.click(button);

    // Check if increaseCartQuantity was called with the correct productId
    expect(increaseCartQuantity).toHaveBeenCalledWith(1);
    
    // Check if toast.success was called with the correct message
    expect(toast.success).toHaveBeenCalledWith('تم زيادة عدد المنتجات في السلة');
  });
});
