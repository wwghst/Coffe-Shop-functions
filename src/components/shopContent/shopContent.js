import { useCallback, useEffect, useState } from 'react';

import BlackHeart from '../../assets/BlackHeart.svg';
import Heart from '../../assets/Heart.svg';
import Img from '../../assets/images/1.png';
import Plus from '../../assets/Plus.svg';
import useServices from '../../services/Services';

import './shopContent.scss';

const ShopContent = () => {
  const [data, setData] = useState([]);
  const [changedData, setChangedData] = useState([]);
  const { getData, putData } = useServices();

  const fetchData = async () => {
    const result = await getData();
    setData(result);
    setChangedData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const buttonsData = [
    { name: 'Brazil', label: 'Brazil' },
    { name: 'Columbia', label: 'Colombia' },
    { name: 'Kenya', label: 'Kenya' },
    { name: 'All', label: 'All' }
  ];

  const searchEmp = useCallback(
    (search) => {
      const upperCaseSearch = search.toUpperCase();
      if (!upperCaseSearch.trim()) {
        fetchData();
        return;
      }

      const filteredData = data.filter(
        (item) => item.title.toUpperCase().indexOf(upperCaseSearch) > -1
      );
      setChangedData(filteredData);
    },
    [data, fetchData]
  );

  const filterPosts = useCallback(
    (filter) => {
      let filteredData;
      switch (filter) {
        case 'Brazil':
          filteredData = data.filter((item) => item.city === 'Brazil');
          setChangedData(filteredData);
          break;
        case 'Columbia':
          filteredData = data.filter((item) => item.city === 'Columbia');
          setChangedData(filteredData);
          break;
        case 'Kenya':
          filteredData = data.filter((item) => item.city === 'Kenya');
          setChangedData(filteredData);
          break;
        case 'All':
          setChangedData(data);
          break;
        default:
          return data;
      }
    },
    [data, fetchData]
  );

  const handleFavoriteClick = (item) => {
    putData(item.id, 'favorite', !item.favorite)
      .then(() => {
        const updatedData = changedData.map((dataItem) => {
          if (dataItem.id === item.id) {
            return { ...dataItem, favorite: !item.favorite };
          }
          return dataItem;
        });

        const updatedMainData = data.map((dataItem) => {
          if (dataItem.id === item.id) {
            return { ...dataItem, favorite: !item.favorite };
          }
          return dataItem;
        });

        setData(updatedMainData);
        setChangedData(updatedData);
        return updatedData;
      })
      .catch((error) => {
        console.error('Failed to update favorite status:', error);
      });
  };

  return (
    <div className='shopContent'>
      <div className='shopContent__header'>
        <div className='shopContent__box'>
          <h2 className='shopContent__title'>Looking for</h2>
          <input
            className='shopContent__input'
            type='text'
            placeholder='start typing here...'
            onChange={(e) => searchEmp(e.target.value)}
          />
        </div>
        <div className='shopContent__box'>
          <h2 className='shopContent__title'>Or filter</h2>
          <div className='shopContent__btns'>
            {buttonsData.map(({ name, label }) => (
              <button
                className='shopContent__btn'
                type='button'
                key={name}
                onClick={() => filterPosts(name)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className='shopContent__main'>
        <View
          changedData={changedData}
          putData={putData}
          handleFavoriteClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
};

const View = (props) => {
  const { changedData, handleFavoriteClick, putData } = props;

  return (
    <>
      {changedData.map((item) => (
        <div className='shopContent__cart' key={item.id}>
          <button
            className='shopContent__favBtn'
            type='button'
            id='favorite'
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
              id='basket'
              onClick={() => putData(item.id, 'inCart', true)}
            >
              <img src={Plus} alt='plus' />
            </button>
            <div className='shopContent__count'>
              <h2 className='shopContent__title'>{item.city}</h2>
              <h2 className='shopContent__price'>{item.price}$</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { ShopContent };
