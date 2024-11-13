import React from 'react';
import Translatable from './translatable_text/Translatable';

interface ProductTitleProps {
  title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => (
  
  <article className="text-sm text-darker-300 leading-[1.8]">
    <div className="flex flex-col mb-6 gap-2">
      <h1 className="text-xl md:text-3xl">{title}</h1>
      <small className="text-xs text-gray-500"><Translatable>The latest and best version to date</Translatable></small>
    </div>
  </article>
);

export default ProductTitle;
