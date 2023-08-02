import Link from 'next/link';
import { FaPeopleCarry, FaRegCommentDots, FaHome } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const MenuItem = ({ link, name, icon }) => {
  return (
    <Link
      href={link}
      className='flex flex-col items-center justify-center text-xl cursor-pointer md:text-lg lg:text-2xl'
    >
      {icon}
      <h1 className='hidden md:block md:text-base lg:text-lg'>{name}</h1>
    </Link>
  );
};

const MobileNavbar = () => {
  return (
    <nav className='fixed bottom-0 flex w-[100%] flex-row  text-[#0146E9] justify-between items-center px-6 md:px-20 py-5 lg:py-3 shadow-md bg-white'>
      <MenuItem link='/' name='Home' icon={<FaHome />} />
      {/* <MenuItem
        link='/interventions'
        name='Interventions'
        icon={<FaRegCommentDots />}
      /> */}
      <MenuItem link='/patients' name='Patients' icon={<FaPeopleCarry />} />
      <MenuItem link='/profile' name='Profile' icon={<ImProfile />} />
    </nav>
  );
};

export default MobileNavbar;
