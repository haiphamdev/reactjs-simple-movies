import React from 'react';

const MovieCard = () => {
  return (
    <div className="movie-card border rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="https://image.api.playstation.com/vulcan/img/rnd/202111/1814/26mVmWE2zXaIyBVGN0Gwkh1s.png"
        alt=""
        className="w-full h-[250x] object-cover rounded-lg mb-5"
      />
      <h3 className="text-xl font-bold mb-3">Spiderman: Homecoming</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>2022</span>
        <span>7.4</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">Watch now</button>
    </div>
  );
};

export default MovieCard;
