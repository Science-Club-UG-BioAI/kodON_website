import { Link } from 'react-router-dom';
import Logo from './UI/Logo';

export default function Nav() {
  return (
    <nav className='flex justify-between items-center p-2 sm:p-4'>
      <Logo />
      <ul className='flex gap-3 sm:gap-4 mr-2 ml-2 text-lazuli-200 font-semibold text-sm sm:text-xl'>
        <Link
          to='/aktualnosci'
          className='relative py-1 before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-lazuli-200 before:to-lazuli-400 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full before:rounded-full'
        >
          Aktualności
        </Link>
        <Link
          to='/galeria'
          className='relative py-1 before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-lazuli-200 before:to-lazuli-400 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full before:rounded-full'
        >
          Galeria
        </Link>
        <Link
          to='/kontakt'
          className='relative py-1 before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-lazuli-200 before:to-lazuli-400 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full before:rounded-full'
        >
          Kontakt
        </Link>
      </ul>
    </nav>
  );
}
