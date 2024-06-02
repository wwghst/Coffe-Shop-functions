import BasketBg from '../../assets/images/cartAndBasketBg.png';
import { BasketAndFavoriteHeader, FavoriteContent, Footer, Tittle } from '../../components';

import './favorite.scss';

export const FavoritesPage = () => {
  return (
    <div className='container'>
      <Tittle text='Favorites' alt='coffee' imgName={BasketBg} />
      <BasketAndFavoriteHeader />
      <FavoriteContent />
      <Footer color='#000' />
    </div>
  );
};
