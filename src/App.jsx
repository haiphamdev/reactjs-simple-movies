import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'swiper/scss';
import Banner from './components/banner/Banner';
import Main from './components/layout/Main';
// import HomePage from './pages/HomePage';
// import MovieDetailPage from './pages/MovieDetailPage';
// import MoviePage from './pages/MoviePage';

// dynamic import
const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'));
const MoviePageV2 = lazy(() => import('./pages/MoviePageV2'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
            <Route path="/movies" element={<MoviePageV2 />} />
            <Route path="/movies/:movieId" element={<MovieDetailPage />} />
            <Route path="*" element={<>Not found</>} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
