import React from "react"

import styles from "./App.module.scss"
import { SearchMovies } from "./SearchMovies"
import logo from "./logo.svg"

export const App = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={styles.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <SearchMovies />
  </div>
)
