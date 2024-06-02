import CardImg3 from '../../assets/images/1.png';
import CardImg1 from '../../assets/images/HomeCard-1.png';
import CardImg2 from '../../assets/images/HomeCard-2.png';

import './homeCards.scss';

const cardsArray = [
  {
    title: 'Solimo Coffee Beans 2 kg',
    price: '10.73',
    img: CardImg1
  },
  {
    title: 'Presto Coffee Beans 1 kg',
    price: '15.99',
    img: CardImg2
  },
  {
    title: 'AROMISTICO Coffee 1 kg',
    price: '6.99',
    img: CardImg3
  }
];

export const HomeCards = () => {
  return (
    <section className='homeCard'>
      <div className='container'>
        <div>
          <h2 className='homeCard__title'>Our best</h2>
          <ul className='homeCard__cards'>
            {cardsArray.map(({ img, price, title }, index) => {
              return (
                <li className='homeCard__card'>
                  <img className='homeCard__card-img' src={img} alt={`card_${index + 1}`} />
                  <h4 className='homeCard__card-title'>{title}</h4>
                  <span className='homeCard__card-price'>{price}$</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div />
      </div>
    </section>
  );
};
