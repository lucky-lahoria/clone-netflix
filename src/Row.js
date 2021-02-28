import {
  YoutubeSearchedFor,
  YoutubeSearchedForSharp,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import requests from "./requests";
import "./Row.css";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  //A snippet of code which runs bsed on a specific  condition

  useEffect(() => {
    //run once when the app loads and not again and again......

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return requests;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  console.log(movies);

  const a = 1;

  const base_url = "https://image.tmdb.org/t/p/original/";

  const handleClick = (movie) => {
    // console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* title */}

      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container > posters */}

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
