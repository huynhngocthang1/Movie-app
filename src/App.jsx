import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        if (!API_KEY) {
          throw new Error("API Key không tồn tại. Kiểm tra biến môi trường VITE_API_KEY.");
        }

        const url1 = `https://api.themoviedb.org/3/movie/popular?api_key=e6f022c2093c8997e40b2632998757ea&language=vi&page=1`;
        //const url2 = `https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1`;
        const response = await fetch(url1);

      

        if (!response.ok) {
          throw new Error(`Lỗi API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (data.results) {
          setMovie(data.results);
        } else {
          throw new Error("Không có dữ liệu phim.");
        }
      } catch (error) {
        console.error("Lỗi khi tải phim:", error);
        setError(error.message);
      }
    };

    fetchMovie();
  }, []);
  return (
    <div className="bg-black pb-10">
      <Header />
      <Banner />
      {error ? (
        <div className="text-red-500 text-center p-4">Lỗi: {error}</div>
      ) : (
        <MovieList title="Phim Hot" data={movie.slice(0,5)} />
      )}
    </div>
  );
}

export default App;
