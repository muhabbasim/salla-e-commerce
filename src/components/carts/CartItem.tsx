import React from 'react';
import CartItemQuantity from './cartItemQuantity';
import CartItemInfo from './CartItemInfo';
import ButtonComponent from '../buttons/ButtonComponent';
import { useShoppingCart } from '@/context/CartContext';
import { toast } from 'sonner';

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
  const { removeFromCart } = useShoppingCart()

  const removeItem = (el: number) => {
    removeFromCart(el)
    toast.success("Item removed from cart")
  }

  return (
    <li className="flex items-start sm:items-center flex-col sm:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100">
      <CartItemInfo product={product}/>

      <div className="flex items-center justify-center gap-4">
        <CartItemQuantity productId={product.id} quantity={product.quantity}/>
        <ButtonComponent
          className="w-[28px] h-[28px] flex items-center justify-center text-red-500 border border-red-500 rounded-full p-1"
          icon={<i className="sicon-trash"></i>}
          onClick={() => removeItem(product.id)}
        />
      </div>
    </li>
  )
}

export default CartItem;
