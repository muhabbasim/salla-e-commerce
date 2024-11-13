import React from 'react';
import CardInfo from './CardInfo';
import CardPrice from './CardPrice';
import CardImage from './CartImage';
import { toast } from 'sonner';
import { useShoppingCart } from '../../context/CartContext';
import ButtonComponent from '../buttons/ButtonComponent';

export interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    salePrice?: number;
    image: string;
    category: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const { increaseCartQuantity } = useShoppingCart();

  const onAddToCart = (id: number) => {
    increaseCartQuantity(id);
    toast.success("Item added to cart")
  };

  return(

    <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
      <CardImage imageURL={product.image} productId={product.id}/>
      <CardInfo title={product.title} category={product.category}/>

      <div className=" w-full flex justify-center items-center">
        <CardPrice price={product.price} className='text-md m-4'/>
      </div>

      <ButtonComponent 
        className="w-full bg-primary text-white p-2 text-md rounded-md"
        title="Add to cart" 
        onClick={() => onAddToCart(product.id)}
      />
    </div>
  )
}
  

export default ProductCard;
