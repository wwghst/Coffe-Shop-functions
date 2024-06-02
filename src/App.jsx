import { BrowserRouter, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import FavAndCartBg from './assets/images/FavoriteAndCartTittleBg.png';
import { Header } from './components';
// eslint-disable-next-line no-unused-vars
import { BasketPage, FavoritesPage, Home, ShopPage } from './pages';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/favorites' element={<FavoritesPage />} />
        <Route exact path='/basket' element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
