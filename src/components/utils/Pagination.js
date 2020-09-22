import React from "react";
import "./Pagination.css";

export default function Pagination(props) {
  return (
    <div className="search-pagination">
      <button
        className="search-prev-button"
        onClick={() => props.onPageChange("prev")}
      >
        {"<"}
      </button>
      <div className="pagination-counting">
        <p>
          {props.currentPage}/{props.numberOfPages}
        </p>
      </div>
      <button
        className="search-next-button"
        onClick={() => props.onPageChange("next")}
      >
        {">"}
      </button>
    </div>
  );
}
