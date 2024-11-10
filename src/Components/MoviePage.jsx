import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [moviesName, SetMovieName] = useState(["Harry Potter", "Die Hard"]);
  const handleAddMovie = (mname) => {
    SetMovieName((prevState) => {
      return [...prevState, mname];
    });
  };
  return (
    <>
      <div className="container col-12 col-md-6 my-3 border">
        <AddMovie handleAddMovie={handleAddMovie} />
        <MovieList moviesList={moviesName} />
      </div>
    </>
  );
};
export default MoviePage;
