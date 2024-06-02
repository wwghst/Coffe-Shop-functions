import { AboutHome, Footer, HomeCards, TittleHome } from '../../components';

import './home.scss';

export const Home = () => {
  return (
    <>
      <div className='container'>
        <TittleHome />
        <AboutHome />
      </div>

      <HomeCards />
      <Footer />
    </>
  );
};
