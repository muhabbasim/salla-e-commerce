import React from 'react';
import CardPrice from './product_card/CardPrice';
import ProductTitle from './ProductTitle';

interface ProductInfoProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => (
  
  <article className="text-sm text-darker-300 leading-[1.8]">
    <ProductTitle title={product.title}/>
    <div className="flex flex-col sm:flex-row w-full my-4 gap-0 sm:gap-2">
      <CardPrice price={product.price} className="text-xl "/>
    </div>
    <p>{product.description}</p>
  </article>
);

export default ProductInfo;
