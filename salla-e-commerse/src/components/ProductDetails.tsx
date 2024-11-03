import React from 'react';
import ImageSlider from './ImageSlider';
import ProductInfo from './ProductInfo';
import AddToCartControls from './carts/AddToCartControls';


interface ProductDetailsProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
  onAddToCart: (quantity: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onAddToCart }) => {

  return (

    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <ImageSlider image={product?.image} />
            <div className="flex flex-col gap-4 col-span-2">
              <ProductInfo product={product}/>
              <AddToCartControls onAddToCart={onAddToCart} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails;
