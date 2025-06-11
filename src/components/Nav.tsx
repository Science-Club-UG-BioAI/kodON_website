import { Link } from 'react-router-dom';
import Logo from './UI/Logo';

export default function Nav() {
  return (
    <nav className='flex justify-between items-center'>
      <Logo />
      <ul className='flex gap-4 mr-2 text-lazuli-200 font-semibold'>
        <Link to='/aktualnosci'>Aktualności</Link>
        <Link to='/galeria'>Galeria</Link>
        <Link to='/kontakt'>Kontakt</Link>
      </ul>
    </nav>
  );
}
