import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "../components/Product.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import Caroussel from "../components/Caroussel.js";
import {Row, Col} from "react-bootstrap";
import {listProducts} from "../actions/productActions.js";
import Rating2 from "../components/Rating2.js";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading, error, products} = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <>
          <h1 className="py-3 text-center"> Check out our last builds </h1>{" "}
          <Rating2 />
          <Caroussel />
          <hr />
          <h1 className="py-3 text-center"> Latest Products </h1>{" "}
          <Row>
            {" "}
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />{" "}
              </Col>
            ))}{" "}
          </Row>{" "}
        </>
      )}{" "}
    </>
  );
};

export default HomeScreen;
