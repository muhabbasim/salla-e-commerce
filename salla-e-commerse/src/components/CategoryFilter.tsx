import React from 'react';

interface CatelogFilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
  categories: []
}

const CatelogFilter: React.FC<CatelogFilterProps> = ({ onCategoryChange, selectedCategory, categories }) => {

  const categoryTitles: any = {
    "electronics": "إلكترونيات",
    "jewelery": "مجوهرات",
    "men's clothing": "ملابس رجالية",
    "women's clothing": "ملابس نسائية"
  };

  return (

    <select
      id="categories"
      onChange={(e) => onCategoryChange(e.target.value)}
      className="bg-white border rounded-md text-md px-2 py-1"
      value={selectedCategory}
    >
      <option value="">جميع المنتجات</option>
      {categories?.map((el: {id: number, value: string}) => {
        const catTitle = categoryTitles[el.value]; 

        return(
          <option key={el.id} value={`category/${el.value}`}>{catTitle}</option>
        )
      })}
    </select>
  )
}

export default CatelogFilter;
