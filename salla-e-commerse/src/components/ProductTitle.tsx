import React from 'react';

interface ProductTitleProps {
  title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => (
  
  <article className="text-sm text-darker-300 leading-[1.8]">
    <div className="flex flex-col mb-6 gap-2">
      <h1 className="text-xl md:text-3xl">{title}</h1>
      <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
    </div>
  </article>
);

export default ProductTitle;
