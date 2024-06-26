import { useCallback, useEffect, useState } from 'react';

import BlackHeart from '../../assets/BlackHeart.svg';
import Heart from '../../assets/Heart.svg';
import Img from '../../assets/images/1.png';
import Plus from '../../assets/Plus.svg';
import useServices from '../../services/Services';
import { Error } from '../error/Error';
import { Sceleton } from '../sceleton/Sceleton';

import './FavoriteContent.scss';

export const FavoriteContent = () => {
  const [data, setData] = useState([]);
  const { getData, putData, error } = useServices();

  const fetchData = useCallback(async () => {
    try {
      const result = await getData();
      setData(result.filter((item) => item.favorite === true));
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }, [getData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFavoriteClick = async (item) => {
    try {
      await putData(item.id, 'favorite', !item.favorite);
      setData((prevData) =>
        prevData.map((dataItem) =>
          dataItem.id === item.id ? { ...dataItem, favorite: !dataItem.favorite } : dataItem
        )
      );
    } catch (error) {
      console.error('Failed to update favorite status:', error);
    }
  };

  const isDataNull = data.length <= 0 && !error ? <Sceleton type={1} /> : null;
  const isError = error ? <Error /> : null;
  const content =
    data.length > 0 && !error ? (
      <View handleFavoriteClick={handleFavoriteClick} putData={putData} data={data} />
    ) : (
      false
    );
  const isContentNull = content ? {} : { margin: '0 auto' };

  return (
    <>
      <div className='favorites__cards' style={isContentNull}>
        {content}
        {isError}
      </div>
      {isDataNull}
    </>
  );
};

const View = ({ handleFavoriteClick, putData, data }) => {
  return (
    <>
      {data.map((item) => (
        <li className='shopContent__cart' key={item.id}>
          <button
            className='shopContent__favBtn'
            type='button'
            onClick={() => handleFavoriteClick(item)}
          >
            <img
              src={item.favorite ? BlackHeart : Heart}
              alt='heart'
              className='shopContent__heartImg'
            />
          </button>
          <img src={Img} alt='cart' className='shopContent__cartImg' />
          <h2 className='shopContent__title'>
            {item.title} {item.weight}
          </h2>
          <div className='shopContent__cartFooter'>
            <button
              className='shopContent__plusBtn'
              type='button'
              onClick={() => putData(item.id, 'inCart', true)}
            >
              <img src={Plus} alt='plus'  />
            </button>
            <div className='shopContent__count'>
              <h2 className='shopContent__title'>{item.city}</h2>
              <h2 className='shopContent__price'>{item.price}$</h2>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};
