import ShopBg from '../../assets/images/ShopTittleBg.png';
import { AboutShop, ShopContent, Tittle } from '../../components';

import './shop.scss';

export const ShopPage = () => {
  return (
    <>
      <Tittle text='Our Coffee' alt='coffee' imgName={ShopBg} />
      <AboutShop />
      <ShopContent />
    </>
  );
};
