import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrder } from "../actions/orderActions";
import { useNavigate } from "react-router-dom";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const cart = useSelector((state) => {
    const itemsPrice = state.cart.cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    const shippingPrice = addDecimals(
      state.cart.cartItems.length === 0 ? 0 : 25
    );
    const taxPrice = addDecimals(itemsPrice * 0.09);
    const totalPrice = addDecimals(
      Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)
    );

    return {
      ...state.cart,
      itemsPrice: itemsPrice,
      shippingPrice: shippingPrice,
      taxPrice: taxPrice,
      totalPrice: totalPrice,
    };
  });

  // //compute prices
  // cart.itemsPrice = cart.cartItems.reduce(
  //   (acc, item) => acc + item.price * item.qty,
  //   0
  // );

  // //Shipping price
  // const shippingPrice = addDecimals(cart.cartItems.length === 0 ? 0 : 25);

  // //tax price
  // const taxPrice = addDecimals(cart.itemsPrice * 0.09);

  // //cart Total price
  // const totalPrice = addDecimals(
  //   Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
  // );

  // const updatedCart = {
  //   ...state.cart,
  //   itemsPrice: itemsPrice,
  //   shippingPrice: shippingPrice,
  //   taxPrice: taxPrice,
  //   totalPrice: totalPrice,
  // };

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [navigate, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup.Item>
            <ListGroup variant="flush">
              <h2>Shipping:</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
                {cart.shippingAddress.zipCode}, {cart.shippingAddress.country}
              </p>
            </ListGroup>
          </ListGroup.Item>

          <ListGroup.Item>
            <h2>Payment Method:</h2>
            <p>
              <strong>Method: </strong>User's balance
            </p>
          </ListGroup.Item>

          <ListGroup.Item>
            <h2>Items Ordered</h2>
            {cart.cartItems.length === 0 ? (
              <Message>
                Your Cart is empty <Link to="/">Go Back</Link>
              </Message>
            ) : (
              <ListGroup variant="flush">
                {cart.cartItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} x ${item.price} = {item.qty * item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2 className="text-center">Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>$ {cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>$ {cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>$ {cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>$ {cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn w-100"
                  disabled={cart.cartItems.length === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
