import { toast } from "sonner";
import { useShoppingCart } from "../../context/CartContext";

interface cartItemQuantityProps {
  productId: number;
  quantity: number;
}

const CartItemQuantity: React.FC<cartItemQuantityProps> = ({ productId, quantity }) => {

  const { decreaseCartQuantity, increaseCartQuantity, addQuantityCartQuantity } = useShoppingCart()

  // increase quantity by adding 1
  const addItem = (el: number) => {
    increaseCartQuantity(el)
    toast.success('تم زيادة عدد المنتجات في السلة')
  }

  // decrease quantity by minus 1
  const decreaseItem = (el: number) => {
    decreaseCartQuantity(el)
    toast.success('تم نقص عدد المنتجات في السلة')
  }

  // update quantity by number
  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);

    // Prevent invalid input
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      addQuantityCartQuantity(productId, newQuantity); 
      toast.success('تم تعديل عدد المنتجات  في السلة');
    }
  };

  return (
    <div className="flex items-center justify-center p-2 border border-gray-200 rounded-lg">
      <button onClick={() => addItem(productId)} className="px-2 text-gray-500">+</button>
      <input
        type="number"
        value={quantity}
        onChange={onQuantityChange}
        className="w-[50px] text-center bg-transparent"
      />
      <button onClick={() => decreaseItem(productId)} className="px-2 text-gray-500">-</button>
    </div>
  )
}

export default CartItemQuantity