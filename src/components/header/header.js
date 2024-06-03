import { NavLink } from 'react-router-dom';

import LogoOne from '../../assets/LogoOne.svg';

import './header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div>
        <img src={LogoOne} alt='logo' className='header__logo' />
        <NavLink
          to='/Coffe-Shop-functions'
          className='header__link'
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          About Us
        </NavLink>
      </div>
      <NavLink
        to='/shop'
        className='header__link'
        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
      >
        Our Coffee
      </NavLink>
      <div className='header__links'>
        <NavLink
          to='/favorites'
          className='header__link'
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          Favorites
        </NavLink>
        <span className='header__line'>/</span>
        <NavLink
          to='/basket'
          className='header__link'
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          Basket
        </NavLink>
      </div>
    </header>
  );
};
