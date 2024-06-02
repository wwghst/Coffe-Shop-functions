import BasketBg from '../../assets/images/cartAndBasketBg.png';
import { BasketAndFavoriteHeader, BasketContent, Footer, Tittle } from '../../components';

import './basket.scss';

export const BasketPage = () => {
  return (
    <div className='container'>
      <Tittle text='Basket' alt='coffee' imgName={BasketBg} />
      <BasketAndFavoriteHeader />
      <BasketContent />
      <Footer color='#000' />
    </div>
  );
};
