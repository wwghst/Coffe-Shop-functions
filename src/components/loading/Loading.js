import './Loading.scss';

const Loading = () => {
  return (
    <div className='loader'>
      <div className='circle'>
        <div className='dot' />
        <div className='outline' />
      </div>
      <div className='circle'>
        <div className='dot' />
        <div className='outline' />
      </div>
      <div className='circle'>
        <div className='dot' />
        <div className='outline' />
      </div>
      <div className='circle'>
        <div className='dot' />
        <div className='outline' />
      </div>
    </div>
  );
};

export { Loading };
