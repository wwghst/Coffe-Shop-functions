import { useCallback, useEffect, useState } from 'react';

import BasketImg from '../../assets/Basket.svg';
import Coffee from '../../assets/images/1.png';
import PlusBlackImg from '../../assets/PlusBlack.svg';
import useServices from '../../services/Services';

import './basketContent.scss';

export const BasketContent = () => {
  const [data, setData] = useState([]);
  const { getData, putData } = useServices();

  const fetchData = useCallback(async () => {
    const result = await getData();
    setData(result.filter((item) => item.inCart === true));
  }, [getData]);

  useEffect(() => {
    fetchData();
  }, [getData]);

  const onPlus = (key) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === key
          ? { ...item, weight: item.weight + 1, price: Math.floor(item.price + 6.99) }
          : item
      )
    );
  };

  const onDelete = useCallback(
    (key) => {
      putData(key, 'inCart', false);
      setData((prevData) => prevData.filter((item) => item.id !== key));
    },
    [putData]
  );

  const total = Math.floor(data.reduce((acc, curr) => acc + curr.price * curr.weight, 0));

  return (
    <div className='basketContent'>
      <div className='basketContent__header gap'>
        <span className='basketContent__tittle-noHover'>Name</span>
        <span className='basketContent__tittle-noHover'>Count</span>
        <span className='basketContent__tittle-noHover'>Price</span>
      </div>
      {data.length > 0 ? (
        <div className='basketContent__content'>
          {data.map((item) => (
            <div key={item.id} className='basketContent__cart'>
              <img className='basketContent__img' src={Coffee} alt='coffee' />
              <h1 className='basketContent__name'>{item.title}</h1>
              <h2 className='basketContent__count'>{item.weight}kg </h2>
              <h2 className='basketContent__price'>{item.price}$</h2>
              <div className='basketContent__buttons'>
                <button
                  className='basketContent__btn'
                  type='button'
                  onClick={() => onPlus(item.id)}
                >
                  <img src={PlusBlackImg} alt='plus' />
                </button>
                <button
                  className='basketContent__btn'
                  type='button'
                  onClick={() => onDelete(item.id)}
                >
                  <img src={BasketImg} alt='basket' />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className='dataZero'>Add something to cart</h1>
      )}
      <div className='basketContent__buyBox'>
        <span className='basketContent__total'>Total: {data.length > 0 ? total : '0'}$</span>
        <button className='basketContent__buyBtn' type='submit'>
          Buy
        </button>
      </div>
    </div>
  );
};
