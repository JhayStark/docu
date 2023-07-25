import React from 'react';
import MobileNavbar from './MobileNavbar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center font-sans'>
      <div className='p-3 w-full lg:w-[1024px] '>{children}</div>
      <MobileNavbar />
    </div>
  );
};

export default Layout;
