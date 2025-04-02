import React from "react";

const IMG_BASE_URL = import.meta.env.VITE_IMG_URL || "https://image.tmdb.org/t/p/w500/";

const MovieList = ({ title, data = [] }) => {
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <div className="flex items-center space-x-4 overflow-x-auto">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="w-[200px] h-[300px] relative group">
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${IMG_BASE_URL}${item.poster_path}`}
                  alt={item.title || item.original_title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">{item.title || item.original_title}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Không có phim nào.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
