import React, { useState } from 'react';

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
        <button onClick={() => handleQuantityChange(1)} className="px-2 text-md text-gray-500">
          +
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="w-[50px] text-center bg-transparent"
        />
        <button onClick={() => handleQuantityChange(-1)} className="px-2 text-md text-gray-500">
          -
        </button>
      </div>
      <button onClick={() => onAddToCart(quantity)} className="w-full h-[42px] bg-primary text-white p-2 rounded-md">
        إضافة للسلة
      </button>
    </div>
  );
};

export default AddToCartControls;
