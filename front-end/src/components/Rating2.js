import React, {useState} from "react";

const Rating2 = ({value, text, color}) => {
  const [rating, setRating] = useState(value);

  const fillStar = (starValue) => {
    if (rating >= starValue) {
      return "fa-sharp fa-solid fa-star";
    } else if (rating + 0.5 > starValue) {
      return "fa-regular fa-star-half-stroke";
    } else {
      return "fa-sharp fa-regular fa-star";
    }
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <div className="rating py-1">
      <span>
        <i
          style={{color}}
          className={fillStar(1)}
          onClick={() => handleStarClick(1)}
        ></i>{" "}
      </span>{" "}
      <span>
        <i
          style={{color}}
          className={fillStar(2)}
          onClick={() => handleStarClick(2)}
        ></i>{" "}
      </span>{" "}
      <span>
        <i
          style={{color}}
          className={fillStar(3)}
          onClick={() => handleStarClick(3)}
        ></i>{" "}
      </span>{" "}
      <span>
        <i
          style={{color}}
          className={fillStar(4)}
          onClick={() => handleStarClick(4)}
        ></i>{" "}
      </span>{" "}
      <span>
        <i
          style={{color}}
          className={fillStar(5)}
          onClick={() => handleStarClick(5)}
        ></i>{" "}
      </span>{" "}
      <span className="px-2"> {text && text} </span>{" "}
    </div>
  );
};

Rating2.defaultProps = {
  color: "#f8e825",
};

export default Rating2;
