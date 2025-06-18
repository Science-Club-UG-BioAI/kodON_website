import Nav from './Nav';
import { Button } from './UI/Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='relative w-full'>
      <div className='absolute inset-0 bg-gradient-to-r from-lazuli-900 to-lazuli-800 ' />
      <div className='absolute inset-0 bg-[url("/codebcg.png")] bg-cover bg-no-repeat bg-center opacity-100' />
      <div className='relative max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 pb-20'>
        <Nav />
        <div className='max-w-1/3'>
          <h1 className='text-lazuli-200 font-bold text-4xl sm:text-6xl px-4 py-8'>
            Zajmujemy się programowaniem, biologią i wszystkim pomiędzy
          </h1>
        </div>

        <div className='px-4 py-6'>
          <Button onClick={() => navigate('/kontakt')}>dołącz do nas</Button>
        </div>
      </div>
    </header>
  );
}
