import LogoOne from '../../assets/LogoOne.svg';
import LogoTwo from '../../assets/LogoTwo.svg';

import './sectionTitle.scss';

export const SectionTitle = (props) => {
  const { color } = props;

  return (
    <div>
      <span className='section__title' style={{ '--color': `${color}` }}>
        {color === 'white' || color === '#fff' ? (
          <img src={LogoOne} alt='' />
        ) : (
          <img src={LogoTwo} alt='' />
        )}
      </span>
    </div>
  );
};
