import React from 'react';
import Translatable from './translatable_text/Translatable';

interface LableProps {
  title: string;
  className?: string;
}

const Lable: React.FC<LableProps> = ({
  title,
  className
}) => {
  return (
    <label className={className}><Translatable>{title}</Translatable></label>
  );
};

export default Lable;
