const AddMovie = (props) => {
  const AddMovie = (e) => {
    e.preventDefault();
    let movieName = e.target.elements.movieName;
    props.handleAddMovie(movieName.value.trim());
    movieName.value = "";
  };
  return (
    <form onSubmit={AddMovie}>
      <div className="row text-white">
        <div className="col-12 py-1 h4 text-success text-center">
          {" "}
          Add Movie
        </div>
        <div className="col-8 offset-1">
          <input
            className="form-control"
            type="text"
            placeholder="Movie Name..."
            name="movieName"
          />
        </div>
        <div className="col-2">
          <button className="btn-success btn form-control">Add</button>
        </div>
        <hr className="mt-3" />
      </div>
    </form>
  );
};
export default AddMovie;
