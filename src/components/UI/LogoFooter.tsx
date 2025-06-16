import { Link } from "react-router-dom";
import blacklogo from '/blacklogo.svg';

export default function LogoFooter() {
  return (
     <Link to='/'>
      <img src={blacklogo} alt='kodON logo' className='h-24 w-auto md:h-28 lg:h-28'/>
    </Link>
  )
}
