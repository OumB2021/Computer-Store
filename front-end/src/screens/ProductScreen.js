import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import "../css/ProductScreen.css";
import Rating from "../components/Rating";
import { listProductsDetails } from "../actions/productActions";
import { useNavigate } from "react-router-dom";

const ProductScreen = () => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const { id } = useParams();
  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <>
      <div className="goback">
        <Link to="/">
          <i className="fa-solid fa-arrow-left-long mb-4 text-light">
            <span className="mx-2">Go Back</span>
          </i>
        </Link>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
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
                        {product.inventory > 0 ? "In stock" : "out of stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.inventory > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.inventory).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-dark w-100"
                      type="button"
                      disabled={product.inventory <= 0}
                    >
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <p>Comment section will go here</p>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
