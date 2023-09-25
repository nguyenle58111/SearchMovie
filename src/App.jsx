import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=8ef074fa`);
      const data = await res.json();
      setAllMovieData(data.Search);
      console.log(data.Search)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  )
}

export default App