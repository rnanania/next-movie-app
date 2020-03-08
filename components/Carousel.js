import React from "react";

const Carousel = props => {
  const { movies } = props;
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide my-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {movies.map((movie, index) => {
          return (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
              key={movie.id}
            ></li>
          );
        })}
      </ol>
      <div className="carousel-inner" role="listbox">
        {movies.map((movie, index) => {
          return (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={movie.id}
            >
              <img
                className="d-block img-fluid"
                src={movie.cover}
                alt={movie.name}
              />
            </div>
          );
        })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

      <style jsx>
        {`
          .carousel-item {
            max-height: 400px;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
