import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList(props) {
  return (
    <div>
      {props.data.map((item) => {
        return <MovieItem key={item._id} item={item} />;
      })}
    </div>
  );
}
