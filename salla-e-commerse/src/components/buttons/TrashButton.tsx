import { useShoppingCart } from "@/context/CartContext";
import { toast } from "sonner";


interface ButtonProps {
  funcProp: number;
}

export default function TrashButton({ funcProp }: ButtonProps) {
  const { removeFromCart } = useShoppingCart()

  const removeItem = (el: number) => {
    removeFromCart(el)
    toast.success('تم إزالة المنتج من السلة')
  }

  return (
    <button 
      className="w-[28px] h-[28px] flex items-center justify-center text-red-500 border border-red-500 rounded-full p-1"
      onClick={() => removeItem(funcProp)} 
      >
      <i className="sicon-trash"></i>
    </button>
  )
}
