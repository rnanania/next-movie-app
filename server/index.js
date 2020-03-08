const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const { parse } = require("url");
const { v4 } = require("uuid");

const fs = require("fs");
const path = require("path");
const moviesFilePath = path.join(__dirname, "./data/movies.json");
const movies = require(moviesFilePath);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

function saveFile(pathToFile, file, callback) {
  fs.writeFile(pathToFile, file, function(err) {
    if (err) {
      callback(null, err);
    }
    callback("File was Updated!", null);
  });
}

function readFile(pathToFile, callback) {
  fs.readFile(pathToFile, (err, data) => {
    if (err) {
      callback(null, err);
    }
    const movies = JSON.parse(data);
    callback(movies, null);
  });
}

const strinigify = data => JSON.stringify(data, null, 2);

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get("/api/v1/movies", (req, res) => {
    readFile(moviesFilePath, (msg, err) => {
      if (err) return res.status(422).send(err);
      return res.json(msg);
    });
  });

  server.get("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    return res.status(200).json(movie);
  });

  server.post("/api/v1/movies/", (req, res) => {
    const movie = req.body;
    movies.push({ ...movie, id: v4() });

    saveFile(moviesFilePath, strinigify(movies), (msg, err) => {
      if (err) return res.status(422).send(err);
      return res.json(msg);
    });
  });

  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const filteredMovies = movies.filter(movie => movie.id !== id);

    saveFile(moviesFilePath, strinigify(filteredMovies), (msg, err) => {
      if (err) return res.status(422).send(err);
      return res.json(msg);
    });
  });

  server.patch("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = req.body;
    const movieIndex = movies.findIndex(movie => movie.id === id);
    movies[movieIndex] = movie;

    saveFile(moviesFilePath, strinigify(movies), (msg, err) => {
      if (err) return res.status(422).send(err);
      return res.json(msg);
    });
  });

  server.get("*", (req, res) => {
    // const parsedUrl = parse(req.url, true);
    // return handle(req, res, parsedUrl);
    return handle(req, res);
  });

  server.post("*", (req, res) => {
    // const parsedUrl = parse(req.url, true);
    // return handle(req, res, parsedUrl);
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, err => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});
