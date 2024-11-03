import React from 'react';
import TrashButton from '../buttons/TrashButton';
import CartItemQuantity from './cartItemQuantity';
import CartItemInfo from './CartItemInfo';

interface CartItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  
  return (
    <li className="flex items-start sm:items-center flex-col sm:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100">
      <CartItemInfo product={product}/>

      <div className="flex items-center justify-center gap-4">
        <CartItemQuantity productId={product.id} quantity={product.quantity}/>
        <TrashButton funcProp={product.id}/>
      </div>
    </li>
  )
}

export default CartItem;
