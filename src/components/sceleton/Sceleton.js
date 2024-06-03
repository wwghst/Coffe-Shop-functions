import './Sceleton.scss';

export const Sceleton = ({ type }) => {
  const renderFirstSceleton = () => {
    return (
      <>
        <p className='char__select'>Please add a product to see</p>
        <div className='skeleton'>
          <div className='pulse skeleton__block' />
          <div className='pulse skeleton__block' />
          <div className='pulse skeleton__block' />
          <div className='pulse skeleton__block' />
          <div className='pulse skeleton__block' />
          <div className='pulse skeleton__block' />
        </div>
      </>
    );
  };

  const renderSecondSceleton = () => {
    return (
      <>
        <p className='char__select'>Please add a product to see</p>
        <div className='skeleton-bask'>
          <div className='pulse skeleton-bask__block' />
          <div className='pulse skeleton-bask__block' />
          <div className='pulse skeleton-bask__block' />
        </div>
      </>
    );
  };

  if (type === 1) {
    return renderFirstSceleton();
  }
  if (type === 2) {
    return renderSecondSceleton();
  }
};
