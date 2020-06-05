import React from "react"
import { useRecoilValue } from "recoil"

import styles from "./SearchMoviesResult.module.scss"
import { Movie, moviesQuery } from "./state"

export const SearchMoviesResult = () => {
  const movies = useRecoilValue(moviesQuery)
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  )
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => (
  <div className={styles.movieCard}>
    <div>{movie.title}</div>
    <div>
      <img className={styles.poster} src={movie.poster} alt={movie.title} />
    </div>
  </div>
)
