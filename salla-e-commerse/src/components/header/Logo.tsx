import React from 'react';

interface Props {
  logoSrc: string;
  storeTitle: string;
  tagline: string;
}

export const CenterLogo: React.FC<Props> = ({ logoSrc, storeTitle, tagline }) => (
  <div className="flex justify-center flex-col sm:flex-row gap-4 items-center">
    <div className="flex flex-col items-center gap-4 relative">
      <a href="/" className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50">
        <img src={logoSrc} alt="Logo" loading="lazy" className="w-full h-full object-cover rounded-full" />
      </a>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl">{storeTitle}</h1>
        <small className="text-gray-400">{tagline}</small>
      </div>
    </div>
  </div>
);

export const NavLogo: React.FC<Props> = ({ logoSrc, storeTitle, tagline }) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 relative">
    <a href="/" className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50">
      <img src={logoSrc} alt="Logo" className="w-full h-full object-cover rounded-full" />
    </a>
    <div className="flex flex-col">
      <h1 className="text-xl">{storeTitle}</h1>
      <small className="text-gray-400">{tagline}</small>
    </div>
  </div>
);
