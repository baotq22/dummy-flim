import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import "../css/FilmDetails.css"
import adultTag from "../assets/svg/adultTag.svg"

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=00bb77cdf4f5637b8c2a0679f21020ed`);
        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDetails();
  }, [id])

  if (!movie) {
    return <div>MovieDetail</div>
  }

  const runtimeConvert = Math.floor(movie.runtime / 60) + "h" + movie.runtime % 60;
  return (
    <div className="movie-detail" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.backdrop_path})`
    }}>
      <div className="movie-detail-header">
        <div className="single_column">
          <section className="original_header">
            <div className="poster_main">
              <div className="poster">
                <div className="imgCont">
                  <div className="imgMain" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.poster_path})`
                  }}></div>
                </div>
              </div>
            </div>
            <div className="movie-detail-info">
              <section className="info_content">
                <div className="title">
                  <div className="mainTitle">
                    <h1>{movie.title}</h1>
                    {movie.adult ? <img src={adultTag} alt="" className="adultTag" /> : <></>}
                  </div>
                  <div className="facts">
                    <span className="release">
                      {movie.release_date} •
                    </span>
                    <span className="genres">
                      {movie.genres.map((genre) => genre.name).join(', ')} •
                    </span>
                    <span className="runtime">
                      {runtimeConvert}
                    </span>
                  </div>
                </div>
                <p>{movie.overview}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
                <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}