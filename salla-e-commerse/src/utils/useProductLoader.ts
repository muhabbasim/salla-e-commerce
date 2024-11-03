import { useQuery } from '@tanstack/react-query'
import api from '../context/apiRequest'
import { ProductProps } from '../pages/Home'


export default function useProductLoader(selectedCategory: string, search: string) {
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: async () => 
      await api().get(`/products/${selectedCategory}`).then((res) => {
        return res.data as ProductProps[];
      }).catch((error) => {
        console.log(error);
        return [];
      })
  });

  // Filter products by search term
  const filteredData = data
    ? data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return { data, filteredData, isLoading, isError };
}
