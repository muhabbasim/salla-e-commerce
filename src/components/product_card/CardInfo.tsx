
import React from 'react';
import Translatable from '../translatable_text/Translatable';

export interface CardInfoProps {
  title?: string;
  category?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ title, category }) => {

  return(

    <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
      <div className=" w-full flex items-center justify-center flex-col gap-1">
        <a href="#" className="block items-center justify-center w-full text-primary text-center">
          <h2 className="text-sm">{title}</h2>
        </a>
        <small className="text-xs text-gray-500"><Translatable>The latest and best version to date</Translatable></small>
      </div>

      {/* product category */}
      <div className="flex items-center justify-center flex-wrap gap-2 text-gray-300 w-full">
        <a href="#" className="text-xs text-gray-500 underline">{category}</a>
      </div>
    </div>
  )
}
  

export default CardInfo;
