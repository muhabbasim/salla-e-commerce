import React from 'react';
import { formatCurrency } from '../../utils/CurrencyFormat';

export interface CardPriceProps {
  price?: number;
  className?: string;
}

const CardPrice: React.FC<CardPriceProps> = ({ price, className }) => {
  return(
    <div className={`${className}`}>
      <span className="font-medium">{formatCurrency(price!)}</span>
    </div>
  )
}

export default CardPrice;
