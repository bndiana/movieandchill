import React from "react";

export default function Pagination(props) {
  return (
    <div>
      <button onClick={() => props.onPageChange("prev")}>{"<"}</button>
      <p>
        {props.currentPage}/{props.numberOfPages}
      </p>
      <button onClick={() => props.onPageChange("next")}>{">"}</button>
    </div>
  );
}
