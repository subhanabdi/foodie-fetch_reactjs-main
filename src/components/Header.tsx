import Logo from '../assets/nav-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className='navbar anim-up fixed top-0 left-0 z-10 mt-0.5 w-full px-4'>
      <div className='mx-auto mt-2 max-w-screen-xl rounded-lg border border-slate-600 bg-slate-900 bg-opacity-30 px-4 py-2.5 shadow-md backdrop-blur-lg backdrop-filter firefox:bg-opacity-90 sm:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <img
              src={Logo}
              className='h-auto w-8 sm:w-9'
              alt='foodieFetch Logo'
            />
            <span className='text-clamp-10-12 whitespace-nowrap font-semibold text-white'>
              foodieFetch
            </span>
          </div>

          {/* Star on GitHub btn */}
          <nav className='nav-icons flex space-x-6'>
            <a
              href='https://github.com/jeremy0x/react-foodie-fetch/'
              target='_blank'
              className='github-icon rounded-lg bg-gray-700 py-2 px-2 text-white transition duration-500 ease-in-out hover:bg-amber-500 hover:text-slate-900 sm:px-4'
            >
              <span className='flex items-center justify-center gap-2'>
                <FontAwesomeIcon icon={['fab', 'github']} />
                <span className='hidden whitespace-nowrap text-xs font-medium sm:block md:text-sm'>
                  Star on GitHub
                </span>
              </span>
              <span className='sr-only'>GitHub repository</span>
            </a>
          </nav>
          {/* Star on GitHub btn */}
        </div>
      </div>
    </header>
  );
};

export default Header;
