import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Film.css';
import { Link } from 'react-router-dom';

export const Film = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=00bb77cdf4f5637b8c2a0679f21020ed&page=${page}`
        );
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="movie-section">
      <h2>Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}