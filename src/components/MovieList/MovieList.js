import React from "react";
import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";

export default function MovieList(props) {
  return (
    <div>
      {props.data.map((item) => {
        return (
          <Link to={`/movie/${item._id}`} key={item._id}>
            <MovieItem item={item} />
          </Link>
        );
      })}
    </div>
  );
}
