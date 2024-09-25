import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="flex items-center justify-between w-full py-3 px-8 z-10 bg-white border-b border-black max-w-[1920px] m-auto">
      <NavLink to={"/dashboard"} className="text-black text-3xl font-extrabold whitespace-nowrap">
        Casino App
      </NavLink>
      <div className="sm:hidden">
        <button onClick={handleToggle}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className="flex flex-col sm:flex-row items-center">
          <li className="list-none mx-8">
            <NavLink to="/dashboard/games" className="hover:text-gray-700 text-black font-semibold">
              Games
            </NavLink>
          </li>
          <li className="list-none mx-8">
            <NavLink to="/dashboard/slots" className="hover:text-gray-700 text-black font-semibold">
              Slots
            </NavLink>
          </li>
          <li className="list-none">
            <button
              onClick={handleLogout}
              className="hover:bg-gray-700 py-3 px-6 text-center font-semibold bg-black text-white rounded-md ml-8"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;