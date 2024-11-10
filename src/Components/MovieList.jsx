const MovieList = ({ moviesList }) => {
  return (
    <div className="text-white">
      {moviesList.map((movie, index) => {
        return <div key={index}>{movie}</div>;
      })}
    </div>
  );
};
export default MovieList;
