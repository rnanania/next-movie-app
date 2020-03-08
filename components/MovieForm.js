import React, { useState } from "react";
import { useRouter } from "next/router";
import { createMovie, updateMovie } from "../actions";

const MovieForm = props => {
  const router = useRouter();
  const {
    initialValue = {
      name: "",
      releaseYear: 1990,
      description: "",
      rating: 5,
      genre: ["drama", "music"],
      image: "",
      cover: "",
      longDesc: ""
    },
    isEdit = false
  } = props;

  const [movie, setMovie] = useState(initialValue);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setMovie({
      ...movie,
      [name]: value
    });
  };

  const handleMultiSelectChange = ({ target }) => {
    const { options } = target;
    const totalOptions = options.length;
    let selctedOptions = [];
    for (let index = 0; index < totalOptions; index++) {
      if (options[index].selected) {
        selctedOptions.push(options[index].value);
      }
    }

    setMovie({
      ...movie,
      genre: [...selctedOptions]
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { handleCloseModal, isEdit = false } = props;

    // Call Create Or Update
    if (isEdit) {
      const { id } = movie;
      updateMovie({ ...movie }).then(() => {
        // Clear Previous movie Data after submit.
        setMovie({
          name: "",
          releaseYear: 1990,
          description: "",
          rating: 5,
          genre: ["drama", "music"],
          image: "",
          cover: ""
        });
        router.push("/movies/[id]", `/movies/${id}`);
      });
    } else {
      createMovie({ ...movie }).then(() => {
        // Clear Previous movie Data after submit.
        setMovie({
          name: "",
          releaseYear: 1990,
          description: "",
          rating: 5,
          genre: ["drama", "music"],
          image: "",
          cover: ""
        });
        // Close Modal
        handleCloseModal();
        router.push("/");
      });
    }
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={movie.name}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="name"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={movie.description}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="description"
          id="description"
          placeholder="Description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          value={movie.rating}
          onChange={handleChange}
          type="number"
          max="5"
          min="0"
          className="form-control"
          name="rating"
          id="rating"
          placeholder="5"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          value={movie.image}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="image"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          value={movie.cover}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="cover"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          value={movie.longDesc}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="longDesc"
          id="longDesc"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple
          className="form-control"
          name="genre"
          id="genre"
          value={movie.genre}
          onChange={handleMultiSelectChange}
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default MovieForm;
