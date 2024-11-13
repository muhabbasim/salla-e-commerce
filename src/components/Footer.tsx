import React from 'react';
import Translatable from './translatable_text/Translatable';

const Footer: React.FC = () => (
  <div className="w-full h-[80px] flex items-center justify-center text-primary bg-secondary-50 mt-4 md:mt-6">
    <p className="text-sm"><Translatable>All rights reserved by: The Beautiful Experience Store | 2023</Translatable></p>
  </div>
);

export default Footer;
