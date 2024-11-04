import React from 'react';
import { CenterLogo, NavLogo } from './header/Logo';
import { LogOut, UserActions } from './header/UserAction';
import { CartIcon } from './header/CartIcon';

interface HeaderProps {
  position: 'center' | 'nav';
}

const Header: React.FC<HeaderProps> = ({ position }) =>  {
  
  return (
    <div className="w-full">
      <div className="container">
        <div className="md:py-6 py-4">
          
          {/* Conditional rendering based on the position prop */}
          {position === 'center' ? (

            <CenterLogo 
              logoSrc="https://cdn.salla.network/images/logo/logo-square.png" 
              storeTitle="متجر التجربة الجميلة" 
              tagline="متجرك لكل تجاربك وأفكارك الجميلة"
            />

          ) : (
            
            <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
              <NavLogo
                logoSrc="https://cdn.salla.network/images/logo/logo-square.png" 
                storeTitle="متجر التجربة الجميلة" 
                tagline="متجرك لكل تجاربك وأفكارك الجميلة"
              />
              <div className="flex items-center gap-4">
               <UserActions/>
               <CartIcon/>
               <LogOut/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



export default Header;
