import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/carts/Cart';
import { useShoppingCart } from '../context/CartContext';
import { AuthContext } from '../context/authContext';

const CartPage: React.FC = () => {

  const route = useNavigate()
  const { cartItems } = useShoppingCart()
  const { currentUser } = useContext(AuthContext);

  const handleCheckout = () => {

    try {

      if( !currentUser ) {
        route('/login')
        return
      } 
      console.log('Proceeding to checkout...');
      localStorage.removeItem('shopping-cart');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Cart
      cartProducts={cartItems}
      onCheckout={handleCheckout}
    />
  );
};

export default CartPage;
