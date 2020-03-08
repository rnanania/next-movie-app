import axios from "axios";
import { CATEGORIES_DATA } from "../data/categories";

const BASE_URL = "http://localhost:3000";

export const getMovieList = () => {
  // const movieList = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(MOVIES_DATA);
  //   }, 50);
  // });
  // return movieList;
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
};

export const getMovieById = id => {
  // const movie = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const movieIndex = MOVIES_DATA.findIndex(movie => movie.id === id);
  //     resolve(MOVIES_DATA[movieIndex]);
  //   }, 50);
  // });
  // return movie;
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};

export const createMovie = async movie => {
  // movie.id = uuidv4();
  // const movieList = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     MOVIES_DATA.push(movie);
  //     resolve(movie);
  //   }, 50);
  // });
  // return movieList;
  return axios.post(`${BASE_URL}/api/v1/movies/`, movie).then(res => res.data);
};

export const updateMovie = async movie => {
  return axios
    .patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data);
};

export const removeMovieById = async id => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};

export const getCategoryList = async () => {
  const categoryList = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORIES_DATA);
    }, 50);
  });
  return categoryList;
};

export const getCategoryById = async id => {
  const category = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const categoryIndex = CATEGORIES_DATA.findIndex(movie => movie.id === id);
      resolve(CATEGORIES_DATA[categoryIndex]);
    }, 50);
  });
  return category;
};
