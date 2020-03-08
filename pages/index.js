import React, { useState } from "react";
import Sidemenu from "../components/SideMenu";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import { getMovieList, getCategoryList } from "../actions";

const Home = props => {
  const { movies, categories } = props;
  const [category, setCategory] = useState("all");

  const handleChangeCategory = cName => {
    setCategory(cName);
  };

  const filteredMovies =
    category && category !== "all"
      ? movies.filter(movie => movie.genre.includes(category))
      : [...movies];

  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Sidemenu
              categories={categories}
              selectedCategory={category}
              changeCategory={handleChangeCategory}
            />
          </div>
          <div className="col-lg-9">
            <Carousel movies={movies} />
            <div className="row">
              <MovieList movies={filteredMovies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovieList();
  const categories = await getCategoryList();
  return {
    movies,
    categories
  };
};

export default Home;
