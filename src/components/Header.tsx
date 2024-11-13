import React from 'react';
import { CenterLogo, NavLogo } from './header/Logo';
import { LogOut, UserActions } from './header/UserAction';
import { CartIcon } from './header/CartIcon';
import Language from './language/Language';

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
              storeTitle="The Beautiful Experience Store" 
              tagline="Your Store for All Your Beautiful Experiences and Ideas"
            />

          ) : (
            
            <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
              <NavLogo
                logoSrc="https://cdn.salla.network/images/logo/logo-square.png" 
                storeTitle="The Beautiful Experience Store" 
                tagline="Your Store for All Your Beautiful Experiences and Ideas"
              />
              <div className="flex items-center gap-4">
               <Language/>
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
