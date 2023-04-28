import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Image, ListGroup, Card, Button } from "react-bootstrap";
import "../css/ProductScreen.css";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = (props) => {
  const { id } = useParams();
  const product = products.find((p) => String(p._id) === id);
  return (
    <>
      <div className="goback">
        <Link to="/">
          <i className="fa-solid fa-arrow-left-long mb-4 text-light">
            <span className="mx-2">Go Back</span>
          </i>
        </Link>
      </div>
      <hr />
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            className="rounded"
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                <strong>{product.name}</strong>
              </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>
                Price: <span className="fw-bold">${product.price}</span>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Description : {product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {product.countInStock >= 0 ? "In stock" : "out of stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-warning w-100"
                  type="button"
                  disabled={product.countInStock <= 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
