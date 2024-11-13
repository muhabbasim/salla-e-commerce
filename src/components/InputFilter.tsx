import React from 'react';

interface InputFilterProps {
  onSearchChange: (value: string) => void;
  search: string;
}

const InputFilter: React.FC<InputFilterProps> = ({ onSearchChange, search }) => {

  return (
    <input
      type="text"
      id="product_query"
      placeholder="Filter"
      onChange={(e) => onSearchChange(e.target.value)}
      value={search}
      className="w-full p-2 bg-white rounded-md border text-md"
    />
  )
}

export default InputFilter;
