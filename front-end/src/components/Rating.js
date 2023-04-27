import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating py-1">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fa-sharp fa-solid fa-star"
              : value >= 0.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fa-sharp fa-solid fa-star"
              : value >= 1.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fa-sharp fa-solid fa-star"
              : value >= 2.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fa-sharp fa-solid fa-star"
              : value >= 3.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fa-sharp fa-solid fa-star"
              : value >= 4.5
              ? "fa-regular fa-star-half-stroke"
              : "fa-sharp fa-regular fa-star"
          }
        ></i>
      </span>
      <span className="px-2">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

// Rating.PropTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;
