/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import './App.css';
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Movie from "./components/Movie";
import { motion, AnimatePresence } from "framer-motion";

function App() {

  const fetchMovie = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-USpage=1");
    const movies = await data.json();
    // console.log(movies)
    setMovie(movies.results);
    setFiltered(movies.results);
  };

  // Run fetch Function + run every time something change
  useEffect(() => {
    fetchMovie();
  }, [])

  //Movies List
  const [movie, setMovie] = useState([]);

  //Filter Movies 
  const [filtered, setFiltered] = useState([]);

  //Active Filter Btn
  const [activeGenre, setActiveGenre] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mt-10">
        Movie App - Fetch Api | Filters
      </h1>

      <Filter
        movie={movie}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="movies-list container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {
            filtered.map(movie => {
              return (
                < Movie key={movie.id} movieData={movie} />
              )
            })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
