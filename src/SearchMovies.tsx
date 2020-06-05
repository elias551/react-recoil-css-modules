import React from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"

import { userInputState, moviesQuery } from "./state"

const SearchMoviesInput = () => {
  const userInput = useRecoilValue(userInputState)
  const setUserInput = useSetRecoilState(userInputState)
  return (
    <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
  )
}

const SearchMoviesResult = () => {
  const movies = useRecoilValue(moviesQuery)
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.title}>{movie.title}</div>
      ))}
    </div>
  )
}

export const SearchMovies = () => {
  return (
    <div>
      <div>Search movies</div>
      <SearchMoviesInput />
      <div>Results:</div>
      <React.Suspense fallback="Loading...">
        <SearchMoviesResult />
      </React.Suspense>
    </div>
  )
}
