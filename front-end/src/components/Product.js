import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a
          href={`/product/${product._id}`}
          className="text-decoration-none text-dark"
        >
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="div">
            <h3 className="fw-semibold">${product.price}</h3>
          </Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Product;
