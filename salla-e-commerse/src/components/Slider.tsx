import React from 'react';

interface SliderProps {
  imageSrc: string;
}

const Slider: React.FC<SliderProps> = ({ imageSrc }) => (
  <div className="w-full bg-gray-100 rounded-lg mb-8">
    <img src={imageSrc} className="w-full aspect-video rounded-lg" alt="Slider" loading="lazy" />
  </div>
);

export default Slider;
