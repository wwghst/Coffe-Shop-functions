import { useCallback, useEffect, useState } from 'react';

import BasketImg from '../../assets/Basket.svg';
import Coffee from '../../assets/images/1.png';
import PlusBlackImg from '../../assets/PlusBlack.svg';
import useServices from '../../services/Services';
import { Error } from '../error/Error';
import { Sceleton } from '../sceleton/Sceleton';

import './basketContent.scss';

export const BasketContent = () => {
  const [data, setData] = useState([]);
  const { getData, putData, error } = useServices();

  const fetchData = useCallback(async () => {
    try {
      const result = await getData();
      setData(result.filter((item) => item.inCart === true));
      return result;
    } catch {
      console.error('Failed to fetch data:', error);
    }
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

  const isDataNull = data.length <= 0 && !error ? <Sceleton type={2} /> : null;
  const isError = error ? <Error /> : null;
  const content =
    data.length > 0 && !error ? <View onPlus={onPlus} onDelete={onDelete} data={data} /> : false;
  const isContentNull = content ? {} : { margin: '0 auto' };
  return (
    <div className='basketContent'>
      <div className='basketContent__header gap'>
        <span className='basketContent__tittle-noHover'>Name</span>
        <span className='basketContent__tittle-noHover'>Count</span>
        <span className='basketContent__tittle-noHover'>Price</span>
      </div>
      <div className='basketContent__content' style={isContentNull}>
        {content}
        {isError}
      </div>
      {isDataNull}
      <div className='basketContent__buyBox'>
        <span className='basketContent__total'>Total: {data.length > 0 ? total : '0'}$</span>
        <button className='basketContent__buyBtn' type='submit'>
          Buy
        </button>
      </div>
    </div>
  );
};

const View = ({ onPlus, onDelete, data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className='basketContent__cart'>
          <img className='basketContent__img' src={Coffee} alt='coffee' />
          <h1 className='basketContent__name'>{item.title}</h1>
          <h2 className='basketContent__count'>{item.weight}kg </h2>
          <h2 className='basketContent__price'>{item.price}$</h2>
          <div className='basketContent__buttons'>
            <button className='basketContent__btn' type='button' onClick={() => onPlus(item.id)}>
              <img src={PlusBlackImg} alt='plus' />
            </button>
            <button className='basketContent__btn' type='button' onClick={() => onDelete(item.id)}>
              <img src={BasketImg} alt='basket' />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
