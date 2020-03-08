import React from "react";
import { getMovieById } from "../../../actions";
import MovieForm from "../../../components/MovieForm";

const EditMovie = props => {
  const { movie } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="display-4">Edit Movie</h1>
          <MovieForm initialValue={movie} isEdit />
        </div>
      </div>
    </div>
  );
};

EditMovie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return {
    movie
  };
};

export default EditMovie;
