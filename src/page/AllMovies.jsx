import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Film.css';
import { Link } from 'react-router-dom';
import { TextField, Select, MenuItem, InputLabel, FormControl, Stack, Typography } from '@mui/material/'

export const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=00bb77cdf4f5637b8c2a0679f21020ed`
        );
        console.log(response.data.genres);
        setGenres(response.data.genres);
      } catch (error) {
        console.log(error);
      }
    }

    fetchGenre();
  }, [])

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        let apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=00bb77cdf4f5637b8c2a0679f21020ed&page=${page}`;

        if (selectedGenre) {
          apiURL += `&with_genres=${selectedGenre}`
        }

        if (searchQuery) {
          apiURL = `https://api.themoviedb.org/3/search/movie?api_key=00bb77cdf4f5637b8c2a0679f21020ed&query=${searchQuery}&page=${page}`;
        }

        const response = await axios.get(apiURL);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData(currentPage);
  }, [currentPage, selectedGenre, searchQuery]);

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

  const handleGenre = (e) => {
    setSelectedGenre(e.target.value);
    setCurrentPage(1);
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="movie-section">
      <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', color: 'white' }}>
        <Typography gutterBottom variant="h1" component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
          Movies
        </Typography>
      </Stack>
      <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', margin: '4rem', color: 'white' }}>
        <TextField id="filled-basic" label="Search..." variant="filled" value={searchQuery}
          onChange={handleSearch} />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Select Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedGenre}
            label="Select Genre"
            onChange={handleGenre}
          >
            <MenuItem value="">All</MenuItem>
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
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