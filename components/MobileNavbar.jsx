import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPeopleCarry, FaRegCommentDots, FaHome } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const MenuItem = ({ link, name, icon, isActive }) => {
  return (
    <Link
      href={link}
      className={` flex flex-col items-center justify-center text-xl cursor-pointer md:text-lg lg:text-2xl`}
    >
      <div className={`${isActive && 'rounded-full bg-[#b1c6f2] p-2'}`}>
        {icon}
      </div>
      <h1 className='hidden md:block md:text-base lg:text-lg'>{name}</h1>
    </Link>
  );
};

const MobileNavbar = () => {
  const router = useRouter();
  return (
    <nav className='fixed bottom-0 flex w-[100%] flex-row  text-[#0146E9] justify-between items-center px-6 md:px-20 py-5 lg:py-3 shadow-md bg-white'>
      <MenuItem
        link='/'
        name='Home'
        icon={<FaHome />}
        isActive={router.pathname === '/'}
      />
      {/* <MenuItem
        link='/interventions'
        name='Interventions'
        icon={<FaRegCommentDots />}
      /> */}
      <MenuItem
        link='/patients'
        name='Patients'
        icon={<FaPeopleCarry />}
        isActive={router.pathname.includes('patients')}
      />
      <MenuItem
        link='/profile'
        name='Profile'
        icon={<ImProfile />}
        isActive={router.pathname.includes('profile')}
      />
    </nav>
  );
};

export default MobileNavbar;
