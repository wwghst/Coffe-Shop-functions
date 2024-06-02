import { NavLink } from 'react-router-dom';

import './basketAndFavoriteHeader.scss';

export const BasketAndFavoriteHeader = () => {
  return (
    <div className='basketAndFavoriteHeader'>
      <NavLink
        to='/favorites'
        className='basketAndFavoriteHeader__tittle pointer'
        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
      >
        Favorites
      </NavLink>
      <span className='basketAndFavoriteHeader__tittle-noHover'>/</span>
      <NavLink
        to='/basket'
        className='basketAndFavoriteHeader__tittle pointer'
        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
      >
        Basket
      </NavLink>
    </div>
  );
};
