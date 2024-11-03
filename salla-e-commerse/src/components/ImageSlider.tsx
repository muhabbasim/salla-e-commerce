import React from 'react';

interface ImageSliderProps {
  image: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ image }) => (
  <div>
      <img
        src={image}
        alt={`Product image `}
        className="w-full aspect-4/3 object-cover rounded-lg mb-8 sm:mb-0"
      />
  </div>
);

export default ImageSlider;
