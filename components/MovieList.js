import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

function MovieList(props) {
  const { movies = [] } = props;
  return movies.map(movie => {
    return (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a>
              <img className="card-img-top" src={movie.image} alt="" />
            </a>
          </Link>
          <div className="card-header movie-genre">
            {movie.genre.join(", ")}
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">{movie.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </small>
          </div>
        </div>
      </div>
    );
  });
}

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
