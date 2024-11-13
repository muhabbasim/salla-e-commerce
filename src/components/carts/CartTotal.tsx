import CardPrice from "../product_card/CardPrice";
import Translatable from "../translatable_text/Translatable";

export interface CartTotalProps {
  totalPrice?: number;
  title?: string;
}

const CartTotal: React.FC<CartTotalProps> = ({ totalPrice, title }) => {

  return(
    <div className="flex items-center justify-between px-4 py-8 border-gray-100 border-t border-b-1">
      <h3 className="font-bold text-xl"><Translatable>{title}</Translatable></h3>
      <CardPrice price={totalPrice} className="text-xl"/>
    </div>
  )
}
  

export default CartTotal;
