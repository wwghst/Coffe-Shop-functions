import { useCallback, useEffect, useState } from 'react';

import BlackHeart from '../../assets/BlackHeart.svg';
import Heart from '../../assets/Heart.svg';
import Img from '../../assets/images/1.png';
import Plus from '../../assets/Plus.svg';
import useServices from '../../services/Services';
import { Error } from '../error/Error';
import { Loading } from '../loading/Loading';
import { Message } from '../message/Message';

import './shopContent.scss';

const ShopContent = () => {
  const [data, setData] = useState([]);
  const [changedData, setChangedData] = useState([]);
  const [message, setMessage] = useState(false)
  const { getData, putData, loading, error } = useServices();

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

  const handleFavoriteClick = (item, key) => {
    putData(item.id, key, !item[key])
      .then(() => {
        const updatedData = changedData.map((dataItem) => {
          if (dataItem.id === item.id) {
            return { ...dataItem, [key]: !item[key] };
          }
          return dataItem;
        });
  
        const updatedMainData = data.map((dataItem) => {
          if (dataItem.id === item.id) {
            return { ...dataItem, [key]: !item[key] };
          }
          return dataItem;
        });
  
        setData(updatedMainData);
        setChangedData(updatedData);
        return updatedData;
      })
      .catch((error) => {
        console.error('Failed to update status:', error);
      });
  };
  

  const onMessage = (msg) => {
    setMessage(msg)
    setTimeout(() => {
      setMessage(false)
    }, 1000)
  }

  const isLoading = loading ? <Loading /> : null;
  const isError = error && !loading ? <Error /> : null;
  const content =
    !error && !loading ? (
      <View changedData={changedData} putData={putData} handleFavoriteClick={handleFavoriteClick} onMessage={onMessage} />
    ) : null;
  const isMessage = message ? <Message msg={message} /> : null;
  return (
    <div className='shopContent'>
      {isMessage}
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
        {isLoading}
        {isError}
        {content}
      </div>
    </div>
  );
};

const View = (props) => {
  const { changedData, handleFavoriteClick, onMessage } = props;

  return (
    <>
      {changedData.map((item) => (
        <div className='shopContent__cart' key={item.id}>
          <button
            className='shopContent__favBtn'
            type='button'
            id='favorite'
            onClick={() => {
              handleFavoriteClick(item, 'favorite')
              if (!item.favorite) {
                onMessage('Product added to favorite');
              }              
            }}>
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
              onClick={() => {
                handleFavoriteClick(item, 'inCart')
                if (!item.inCart) {
                  onMessage('Product added to cart')
                }   
              }}
            >
              <img src={Plus} alt='plus' className={item.inCart ? 'shopContent__plusBtn__img--cross' : 'shopContent__plusBtn__img'} />
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
