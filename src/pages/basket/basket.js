import BasketBg from '../../assets/images/cartAndBasketBg.png';
import { BasketAndFavoriteHeader, BasketContent, Tittle } from '../../components';

import './basket.scss';

export const BasketPage = () => {
  return (
    <>
      <Tittle text='Basket' alt='coffee' imgName={BasketBg} />
      <BasketAndFavoriteHeader />
      <BasketContent />
    </>
  );
};
