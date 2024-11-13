import React from 'react';
import Translatable from './translatable_text/Translatable';

interface CatelogFilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
  categories: []
}

const CatelogFilter: React.FC<CatelogFilterProps> = ({ onCategoryChange, selectedCategory, categories }) => {

  return (

    <select
      id="categories"
      onChange={(e) => onCategoryChange(e.target.value)}
      className="bg-white border rounded-md text-md px-2 py-1"
      value={selectedCategory}
    >
      <option value=""><Translatable>All products</Translatable></option>
      {categories?.map((el: {id: number, value: string}) => {

        return(
          <option key={el.id} value={`category/${el.value}`}><Translatable>{el.value}</Translatable></option>
        )
      })}
    </select>
  )
}

export default CatelogFilter;
