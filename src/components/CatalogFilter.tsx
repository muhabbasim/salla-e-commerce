import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from '../context/apiRequest';
import InputFilter from './InputFilter';
import CatelogFilter from './CategoryFilter';

interface CatalogFilter {
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
  search: string;
}

const CatalogFilter: React.FC<CatalogFilter> = ({ onSearchChange, onCategoryChange, selectedCategory, search }) => {

  const { data } = useQuery({
    queryKey: ['categories',],
    queryFn: async () => 
      await api().get(`/products/categories`).then((res) => {
        return res.data
      })
  })

  const categories = data?.map((category: string, index: number) => ({ id: index, value: category}))

  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <InputFilter search={search} onSearchChange={onSearchChange}/>
      <CatelogFilter onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} categories={categories}/>
    </div>
  )
}

export default CatalogFilter;
