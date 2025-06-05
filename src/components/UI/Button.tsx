import type { ButtonProps } from '../../types/types';

export const Button = ({
  children,
  onClick,
  size = 'medium',
  className = '',
}: ButtonProps) => {
  const baseStyles =
    'relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out rounded-full shadow-xl group cursor-pointer';
  const sizeStyles = {
    small: 'p-2 px-3 py-1.5',
    medium: 'p-4 px-8 py-3',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
    >
      <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-[#379BA6] via-[#8FCBD9] to-[#8FCBD9]'></span>
      <span className='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#C4EEF2] rounded-full opacity-30 group-hover:rotate-90 ease'></span>
      <span className='relative text-[#0C1821] font-bold'>{children}</span>
    </button>
  );
};
