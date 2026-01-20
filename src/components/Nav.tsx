import Logo from './UI/Logo';
import LogoFull from './UI/LogoFull';

export default function Nav() {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 64;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: 'smooth',
    });
  };

  return (
    <nav className='flex justify-between items-center p-2 sm:p-4'>
      <LogoFull />

      <ul className='flex gap-3 sm:gap-4 mr-2 ml-2 text-lazuli-200 font-semibold text-sm sm:text-xl'>
        <li>
          <a
            href='#Aktualności'
            onClick={(e) => smoothScroll(e, 'Aktualności')}
            className='relative py-1 before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-lazuli-200 before:to-lazuli-400 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full before:rounded-full'
          >
            Aktualności
          </a>
        </li>

        <li>
          <a
            href='#Galeria'
            onClick={(e) => smoothScroll(e, 'Galeria')}
            className='relative py-1 before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-lazuli-200 before:to-lazuli-400 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full before:rounded-full'
          >
            Galeria
          </a>
        </li>

        <li>
          <a
            href='#Kontakt'
            onClick={(e) => smoothScroll(e, 'Kontakt')}
            className='relative py-1 before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-gradient-to-r before:from-lazuli-200 before:to-lazuli-400 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full before:rounded-full'
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
