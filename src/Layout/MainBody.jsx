import Header from "./Header";
import Counter from "../Counter";
import AddMovie from "../Components/AddMovie";
import MoviePage from "../Components/MoviePage";

const MainBody = () => {
  return (
    <div>
      <Header />
      <div className="text-center p-2 m-2 row">
        <Counter />
        <MoviePage />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default MainBody;
