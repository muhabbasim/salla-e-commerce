import React from 'react';
import CardPrice from '../product_card/CardPrice';

interface CartItemInfoProps {
  product: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({ product }) => {
  
  return (
    <a href={`/product/${product.id}`} className="flex items-start justify-center gap-2 flex-1">
      <img className="rounded-md w-[35px] object-cover" src={product.image} alt={product.title} />
      <div className="flex flex-col flex-1 gap-1">
        <h4>{product.title}</h4>
        <div className="flex items-center justify-start gap-2">
          <b className="ltr">x {product.quantity}</b>
          <CardPrice price={product.price} className="text-xs text-gray-500"/>
        </div>
      </div>
    </a>

  )
}

export default CartItemInfo;
