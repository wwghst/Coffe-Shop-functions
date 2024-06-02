import './tittle.scss';

const Tittle = (props) => {
  const { imgName, alt, text } = props;
  return (
    <div className='tittleShop'>
      <img src={imgName} alt={alt} className='tittleShop__bg' />
      <h1 className='tittleShop__title'>{text}</h1>
    </div>
  );
};

export { Tittle };
