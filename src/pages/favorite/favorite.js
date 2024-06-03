import BasketBg from '../../assets/images/cartAndBasketBg.png';
import { BasketAndFavoriteHeader, FavoriteContent, Tittle } from '../../components';

import './favorite.scss';

export const FavoritesPage = () => {
  return (
    <>
      <Tittle text='Favorites' alt='coffee' imgName={BasketBg} />
      <BasketAndFavoriteHeader />
      <FavoriteContent />
    </>
  );
};
