import React from 'react';
import { useShoppingCart } from "@/context/CartContext";

export const CartIcon: React.FC = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <a href="/cart" className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-secondary-50 text-primary">
      <i className="sicon-shopping-bag"></i>
      {cartQuantity > 0 && (
        <div className='relative w-[20px]x h-[20px]x'>
          <span className=" absolute bottom-1 text-primary text-lg w-5 h-5 rounded-full flex items-center justify-center">
            {cartQuantity}
          </span>
        </div>
      )}
    </a>
  );
};
