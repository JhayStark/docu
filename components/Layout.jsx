import React from 'react';
import MobileNavbar from './MobileNavbar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center font-sans'>
      <div className='p-3 pt-5 w-full lg:w-[1024px] mb-10 '>{children}</div>
      <MobileNavbar />
    </div>
  );
};

export default Layout;
