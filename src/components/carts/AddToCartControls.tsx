import React, { useState } from 'react';
import ButtonComponent from '../buttons/ButtonComponent';
import InputField from '../InputField';

interface AddToCartControlsProps {
  onAddToCart: (quantity: number) => void;
}

const AddToCartControls: React.FC<AddToCartControlsProps> = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (el: number) => {
    setQuantity((prev) => Math.max(1, prev + el));
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center p-2 border border-gray-200 rounded-lg">
        <ButtonComponent
          title="+"
          className="px-2 text-md text-gray-500"
          onClick={() => handleQuantityChange(1)}
        />  
        <InputField
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="w-[50px] text-center bg-transparent"       
        />
        <ButtonComponent
          title="-"
          className="px-2 text-md text-gray-500"
          onClick={() => handleQuantityChange(-1)}
        />  
      </div>
      <ButtonComponent
        title="Add to cart"
        className="w-full h-[42px] bg-primary text-white p-2 rounded-md"
        onClick={() => onAddToCart(quantity)}
      />
    </div>
  );
};

export default AddToCartControls;
