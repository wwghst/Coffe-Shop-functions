import Img from '../../assets/images/aboutShopImg.png';
import { SectionTitle } from '../sectionTitle/sectionTitle';

import './aboutShop.scss';

const AboutShop = () => {
  return (
    <div className='aboutShop'>
      <div className='aboutShop__box'>
        <img src={Img} className='aboutShop__img' alt='img' />
        <div className='aboutShop__content'>
          <h1 className='aboutShop__title'>About our beans</h1>
          <SectionTitle color='black' />
          <p className='aboutShop__text'>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention so
            questions. As greatly removed calling pleased improve an. Last ask him cold feel met
            spot shy want. Children me laughing we prospect answered followed. At it went is song
            that held help face.
          </p>
        </div>
      </div>
      <hr className='aboutShop__hr' />
    </div>
  );
};
export { AboutShop };
