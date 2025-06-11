import { Link } from 'react-router-dom';
import logo from '/logo.svg';

export default function Logo() {
  return (
    <Link to='/'>
      <img src={logo} alt='kodON logo' className='h-24 w-auto md:h-36 lg:h-36'/>
    </Link>
  );
}
