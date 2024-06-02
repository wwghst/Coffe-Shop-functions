import HomeBg from '../../assets/images/HomeBg.png';
import LogoTwo from '../../assets/LogoTwo.svg';

import './tittleHome.scss';

const TittleHome = () => {
  return (
    <div className='tittleHome'>
      <img src={HomeBg} alt='homeBg' className='tittleHome__bg' />
      <div className='tittleHome__box'>
        <h1 className='tittleHome__title'>Everything You Love About Coffee</h1>
        <div className='tittleHome__logoBox'>
          <span className='tittleHome__line' />
          <img src={LogoTwo} alt='logoTwo' className='tittleHome__logo' />
          <span className='tittleHome__line' />
        </div>
        <div className='tittleHome__texts'>
          <p className='tittleHome__text'>We makes every day full of energy and taste</p>
          <p className='tittleHome__text'>Want to try our beans?</p>
        </div>
        <button className='tittleHome__btn' type='button'>
          More
        </button>
      </div>
    </div>
  );
};

export { TittleHome };
