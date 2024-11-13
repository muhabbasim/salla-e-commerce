import React from 'react';
import { useShoppingCart } from '../../context/CartContext';

export const CartIcon: React.FC = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <a dir='rtl' href="/cart" className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-secondary-50 text-primary">
      <i className="sicon-shopping-bag"></i>
      {cartQuantity > 0 && (
        <div className='relative w-[20px]x h-[20px]x'>
          <div className=' h-6 w-6 bg-rose-800 rounded-full absolute right-[-2px] bottom-[2px]'></div>
          <span className=" absolute bottom-1 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center">
            {cartQuantity}
          </span>
        </div>
      )}
    </a>
  );
};
