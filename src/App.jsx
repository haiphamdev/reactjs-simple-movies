import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'swiper/scss';
import Banner from './components/banner/Banner';
import Main from './components/layout/Main';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
