import React from 'react'
import MovieCard from './MovieCard'
import { useState } from 'react'

export default function SearchMovie() {

  const [query, setQuery] = useState<string>("")
  const [movies, setMovies] = useState<string[]>([])
  const searchMovies = async (e: any) => {
    e.preventDefault()


    const url = `https://api.themoviedb.org/3/search/movie?api_key=71a09527599f1bb9027e0044994310aa&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      await fetch(url)
        .then(response => response.json())
        .then(data => setMovies(data.results))


    }
    catch (err) {
      console.log(err)
    }

  }
  return (<>
    <form className='form' onSubmit={searchMovies}>
      <label htmlFor='query' className='label-search'>Movie Name</label>
      <input value={query} onChange={(e: any) => setQuery(e.target.value)} className="input" type="text" name="query" placeholder='search movie' />
      <button type='submit' className='btn-search'>Search</button>

    </form>
    <div className='card-list'>
      {movies.filter((movie: any) => movie.poster_path).map((movie: any) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  </>
  )
}
