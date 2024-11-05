import React from 'react';

interface SliderProps {
  imageSrc: string;
}

const Slider: React.FC<SliderProps> = ({ imageSrc }) => (
  <div className="w-full bg-gray-100 rounded-lg mb-8">
    <img src={imageSrc} srcSet={`${imageSrc}?w=400 400w, ${imageSrc}?w=800 800w, ${imageSrc}?w=1200 1200w`} className="w-full aspect-video rounded-lg" alt="Slider" loading="lazy" />
  </div>
);

export default Slider;
