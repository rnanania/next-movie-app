import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getMovieById, removeMovieById } from "../../../actions";

const Movie = props => {
  const { movie = {} } = props;
  const router = useRouter();
  const { id } = router.query;

  const deleteMovie = () => {
    removeMovieById(id).then(data => {
      router.push("/");
    });
  };

  return (
    <div className="jumbotron">
      <h1 className="display-4">{movie.name}</h1>
      <p className="lead">{movie.genre}</p>
      <hr className="my-4" />
      <p>{movie.description}</p>
      <button className="btn btn-primary btn-lg">Learn more</button>
      <button className="btn btn-danger btn-lg ml-1" onClick={deleteMovie}>
        Delete
      </button>
      <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
        <button className="btn btn-warning btn-lg ml-1">Edit</button>
      </Link>
    </div>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return {
    movie
  };
};

export default Movie;
