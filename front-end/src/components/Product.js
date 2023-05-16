import React from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import Rating2 from "./Rating2";
import "../css/product.css";

const Product = ({product}) => {
  // const Product = ({product}) => {
  //   const [rating, setRating] = useState(product.rating);
  //   const [numReviews, setNumReviews] = useState(product.numReviews);

  //   const handleStarClick = (starValue) => {
  //     const newRating = (rating * numReviews + starValue) / (numReviews + 1);
  //     setRating(newRating);
  //     setNumReviews(numReviews + 1);
  //   };
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <div className="">
          <Card.Img src={product.image} variant="top" as="img" />
        </div>{" "}
      </Link>{" "}
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          className="text-decoration-none text-dark"
        >
          <Card.Title as="div">
            <strong> {product.name.substring(0, 30)} </strong>{" "}
          </Card.Title>{" "}
          <Card.Text as="div">
            <Rating2
              value={product.rating}
              text={`${product.numbReviews} reviews`}
            />{" "}
          </Card.Text>{" "}
          <Card.Text as="div">
            <h3 className="fw-semibold"> $ {product.price} </h3>{" "}
          </Card.Text>{" "}
        </Link>{" "}
      </Card.Body>{" "}
    </Card>
  );
};

export default Product;
