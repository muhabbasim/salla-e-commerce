import CatalogFilter from "../components/CatalogFilter"
import ProductCard from "../components/product_card/ProductCard"
import Slider from "../components/Slider"
import { useEffect, useState } from "react"
import _ from 'lodash';
import useProductLoader from "../utils/useProductLoader"
import SkeletonProductCard from "@/components/skeleton/SkeletonProductCard"
import SkeletonSlider from "@/components/skeleton/SkeletonSlider"
import EndOFLoader from "@/components/EndOFLoader"


export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  salePrice?: number;
  image: string;
  category: string;
}

export default function Home() {

  const [loadingSlider, setLoadingSlider] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(0); 
  const [loading, setLoading] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState<ProductProps[]>([]);
  const pageSize = 8;

  const { data, filteredData, isLoading, isError } = useProductLoader(selectedCategory, search)

  // Because no pages pagination in the data return from the api i had to use laosh library 
  // to make pages of the products then Simulate API loading dela
  // Chunk products into pages based on the latest data
  const productChunks = data ? _.chunk(filteredData, pageSize) : [];
  // Reset displayed products and page state when data or selectedCategory changes
  useEffect(() => {
    setCurrentPage(0);
    const filteredResults = data
      ? data.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];
    const initialChunk = _.chunk(filteredResults, pageSize)[0] || [];
    setDisplayedProducts(initialChunk); 
  }, [ search, data, selectedCategory]); 

  const loadMoreProducts = () => {
    
    if (loading || currentPage >= productChunks.length - 1) return; 
    setLoading(true);
    
    setTimeout(() => { // Simulate API loading delay
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1;
        setDisplayedProducts((prevProducts) => [
          ...prevProducts,
          ...productChunks[nextPage],
        ]);
        setLoading(false);
        return nextPage;
      });
    }, 3000);
  };


  // Infinite scroll handler
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
      loadMoreProducts();
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, currentPage, productChunks.length]);


  const onSearchChange = (el:string) => {
    setSearch(el);
  };

  const onCategoryChange = (el:string) => {
    setSelectedCategory(el);
    setSearch('')
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingSlider(false);
    }, 1000);
  }, []) 


  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">

          {!loadingSlider ? (
            <>
              {/* <!-- slider --> */}
              <Slider imageSrc="https://images.unsplash.com/photo-1524883173980-67b26d34e82c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              
              {/* search and catalog filter */}
              <CatalogFilter 
                onSearchChange={onSearchChange}
                search={search} 
                selectedCategory={selectedCategory} 
                onCategoryChange={onCategoryChange}
              />
            </>
          ) :  (
            <SkeletonSlider/>
          ) }

          {/* <!-- product-entry - infinite scroll --> */}
          { filteredData.length > 0 ? (
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
              {displayedProducts?.map((product: ProductProps) => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          ) :  isLoading ? (
            <SkeletonProductCard/>
          ) : isError && (
            <div>Server Error</div>
          )}
          
          {loading && (
            <SkeletonProductCard/>
          )}
          
          {currentPage >= productChunks.length - 1 && (
            <EndOFLoader/>
          )}
        </div>
      </div>
    </main>

  )
}
