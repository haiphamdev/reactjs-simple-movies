import { fetcher, tmdbAPI } from '@/apiConfig/config';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import Button from '../button/Button';
//getMovieList
const Banner = () => {
  const { data } = useSWR(tmdbAPI.getMovieList('upcoming'), fetcher);

  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-10">
      <Swiper grabCursor="true" slidesPerView={'auto'}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={tmdbAPI.imageOriginal(poster_path)}
        alt=""
        className="w-full h-full object-cover rounded-lg object-center"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-lg">Adventure</span>
          <span className="py-2 px-4 border border-white rounded-lg">Adventure</span>
          <span className="py-2 px-4 border border-white rounded-lg">Adventure</span>
        </div>
        <Button bgColor="primary" onClick={() => navigate(`/movies/${id}`)}>
          Watch now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
