import { useShoppingCart } from "../../context/CartContext";
import { toast } from "sonner";
import ButtonComponent from "../buttons/ButtonComponent";
import InputField from "../InputField";

interface cartItemQuantityProps {
  productId: number;
  quantity: number;
}

const CartItemQuantity: React.FC<cartItemQuantityProps> = ({ productId, quantity }) => {

  const { decreaseCartQuantity, increaseCartQuantity, addQuantityCartQuantity } = useShoppingCart()

  // increase quantity by adding 1
  const addItem = (el: number) => {
    increaseCartQuantity(el)
    toast.success("Item Added to cart quantity")
  }

  // decrease quantity by minus 1
  const decreaseItem = (el: number) => {
    decreaseCartQuantity(el)
    toast.success("Item Decreased from cart quantity")
  }

  // update quantity by number
  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);

    // Prevent invalid input
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      addQuantityCartQuantity(productId, newQuantity); 
      toast.success("Item quantity updated in cart");
    }
  };

  return (
    <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg">
      <ButtonComponent
        title="+"
        className="px-2 text-md text-gray-500"
        onClick={() => addItem(productId)}
      />  
      <InputField
        type="number"
        value={quantity}
        onChange={onQuantityChange}
        className="w-[50px] text-center bg-transparent"   
      />
      <ButtonComponent
        title="-"
        className="px-2 text-md text-gray-500"
        onClick={() => decreaseItem(productId)} 
      />  
    </div>
  )
}

export default CartItemQuantity