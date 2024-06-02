import ShopBg from '../../assets/images/ShopTittleBg.png';
import { AboutShop, Footer, ShopContent, Tittle } from '../../components';

import './shop.scss';

export const ShopPage = () => {
  return (
    <div className='container'>
      <Tittle text='Our Coffee' alt='coffee' imgName={ShopBg} />
      <AboutShop />
      <ShopContent />
      <Footer color='#000' />
    </div>
  );
};
