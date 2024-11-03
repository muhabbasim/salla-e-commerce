import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from '../context/apiRequest';

interface InputFilterProps {
  onSearchChange: (value: string) => void;
  search: string;
}

const InputFilter: React.FC<InputFilterProps> = ({ onSearchChange, search }) => {

  return (
    <input
      type="text"
      id="product_query"
      placeholder="ادخل اسم المنتج..."
      onChange={(e) => onSearchChange(e.target.value)}
      value={search}
      className="w-full p-2 bg-white rounded-md border text-md"
    />
  )
}

export default InputFilter;
