import { NavLink } from 'react-router-dom';

import LogoOne from '../../assets/LogoOne.svg';
import { SectionTitle } from '../sectionTitle/sectionTitle';

import './footer.scss';

export const Footer = (props) => {
  const { color, logoColor } = props;

  return (
    <footer className='footer'>
      <div className='footer__menu' style={{ color: color ?? '#000' }}>
        <div>
          <img src={LogoOne} alt='logo' className='footer__logo' />
          <NavLink
            to='/Coffe-Shop'
            className='footer__link'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
          >
            About Us
          </NavLink>
        </div>
        <NavLink
          to='/shop'
          className='footer__link'
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          Our Coffee
        </NavLink>
        <div className='footer__links'>
          <NavLink
            to='/favorites'
            className='footer__link'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
          >
            Favorites
          </NavLink>
          <span className='footer__line'>/</span>
          <NavLink
            to='/basket'
            className='footer__link'
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
          >
            Basket
          </NavLink>
        </div>
      </div>

      <SectionTitle color={logoColor ?? color ?? '#000'} />
    </footer>
  );
};
