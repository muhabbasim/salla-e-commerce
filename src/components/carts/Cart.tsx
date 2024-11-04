import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Title from '../Title';
import CartItem from './CartItem';
import SkeletonCartItem from '../skeleton/SkeletonCartItem';
import CartTotal from './CartTotal';
import ClickButton from '../buttons/ClickButton';
import api from '../../context/apiRequest';
import { ProductProps } from '../../pages/Home';


interface CartProduct {
  quantity: number;
  id: number;
}

interface CartProps {
  cartProducts: CartProduct[];
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ cartProducts, onCheckout }) => {
  
  const { data: allProducts, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => 
      await api().get('/products').then((res) => {
        return res.data as ProductProps[]
      })
  })

  // Calculate total and find matching products from `products`
  const total = cartProducts.reduce((sum, cartItem) => {
    const product = allProducts?.find((product) => product.id === cartItem.id);
    return product ? sum + product.price * cartItem?.quantity : sum;
  }, 0);

  
  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-4 bg-white rounded-lg shadow-4xl">
          <Title title='سلة المشتريات' className="text-lg  mb-6"/>

          <ul className="flex flex-col">
            {cartProducts?.map((product) => {
              const item = allProducts?.find(el => el.id === Number(product.id));

              return (
                <div key={product.id}>
                  { item ? (
                     <CartItem
                       product={{ ...item, quantity: product?.quantity }}
                     />
                   ) : isLoading ? (
                      <SkeletonCartItem/>
                   ) : isError && (
                     <div>Server Error</div>
                   )}
                </div>
              );
            })}
          </ul>

          <CartTotal totalPrice={total} title='اجمالي السلة'/>
          <ClickButton title="اتمام عملية الدفع" buttonFunc={onCheckout}/>
        </div>
      </div>
    </main>
  );
};

export default Cart;
