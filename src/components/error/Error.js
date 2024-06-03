import error from '../../assets/images/error.gif';

import './Error.scss';

export const Error = () => {
  return <img src={error} className='error__img' alt='404' />;
};
