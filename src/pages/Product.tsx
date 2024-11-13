import React from 'react';
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../context/CartContext';
import { useQuery } from '@tanstack/react-query';
import api from '../context/apiRequest';
import { ProductProps } from './Home';
import { toast } from 'sonner';
import SkeletonProductDetails from '../components/skeleton/SkeletonProductDetails';

const Product: React.FC = () => {

  const params = useParams();
  const productId = Number(params?.id);

  const { data: singleProduct, isLoading, isError } = useQuery({
    queryKey: ['single_product'],
    queryFn: async () => 
      await api().get(`/products/${productId}`).then((res) => {
        return res.data as ProductProps
      })
  })

  const { addCartQuantity } = useShoppingCart()
  
  const handleAddToCart = (quantity: number) => {

    addCartQuantity(productId!, quantity)
    console.log(`Added ${quantity} items to the cart.`);
    toast.success("Item added to cart")
  };

  return (
    <div>
      { singleProduct ? (
        <ProductDetails product={singleProduct} onAddToCart={handleAddToCart} />
      ) :  isLoading ? (

        <div className='container'>
          <SkeletonProductDetails/>
        </div>

      ) : isError && (
        <div>Server Error</div>
      )}
    </div>
  )
};

export default Product;
