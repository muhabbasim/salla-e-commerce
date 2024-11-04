
import React from 'react';

export interface CardImageProps {
  imageURL?: string;
  productId?: number;
}

const CardImage: React.FC<CardImageProps> = ({ imageURL, productId }) => {

  return(
    <a href={`/product/${productId}`} className="block w-full relative mb-4">
      <img src={imageURL} alt="card image" loading="lazy" className="w-full aspect-4/3 object-cover rounded-lg" />
    </a>
  )
}
  

export default CardImage;
