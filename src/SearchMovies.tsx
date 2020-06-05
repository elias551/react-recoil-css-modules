import React from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"

import { SearchMoviesResult } from "./SearchMoviesResult"
import { userInputState } from "./state"

const SearchMoviesInput = () => {
  const userInput = useRecoilValue(userInputState)
  const setUserInput = useSetRecoilState(userInputState)
  return (
    <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
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
