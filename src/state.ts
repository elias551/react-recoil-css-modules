import { atom, selector } from "recoil"

export const userInputState = atom({
  key: "userInputValue",
  default: "",
})

interface Movie {
  title: string
  summary: string
  poster: string
}

export const moviesQuery = selector({
  key: "moviesQuery",
  get: async ({ get }) => {
    const userInput = get(userInputState)
    return fetch(
      "https://biskott-search-yts.herokuapp.com/yts/v1/search?term=" +
        encodeURIComponent(userInput)
    ).then<Movie[]>((r) => r.json())
  },
})
