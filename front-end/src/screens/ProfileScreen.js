import React, {useState, useEffect} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {getUserDetails, updateUserProfile} from "../actions/userActions";
import {useLocation, useNavigate} from "react-router-dom";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const {loading, error, user} = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {success} = userUpdateProfile;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
        setBalance(user.balance);
      }
    }
  }, [navigate, userInfo, dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({id: user._id, name, email, password}));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2> Profile update </h2>{" "}
        {message && <Message variant="danger"> {message} </Message>}{" "}
        {error && <Message variant="danger"> {error} </Message>}{" "}
        {success && (
          <Message variant="success"> Profile updated successfully </Message>
        )}{" "}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="emai">
            <Form.Label> Email Address </Form.Label>{" "}
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>{" "}
          </Form.Group>{" "}
          <Form.Group className="py-2" controlId="password">
            <Form.Label> Password </Form.Label>{" "}
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>{" "}
            <Form.Label> Balance </Form.Label>{" "}
            <Form.Control
              type="text"
              placeholder="Enter Balance"
              value={password}
              onChange={(e) => setBalance(e.target.value)}
            ></Form.Control>{" "}
          </Form.Group>{" "}
          <Button
            style={{width: "100%", marginTop: "4px"}}
            type="submit"
            variant="dark"
          >
            SAVE{" "}
          </Button>{" "}
        </Form>{" "}
        {loading && <Loader />}{" "}
      </Col>{" "}
      <Col md={3}>
        <h2> Profile info </h2>{" "}
        <Row>
          <p style={{fontSize: 20}}> Name </p>
          <p style={{fontSize: 15}}>Jane Doe</p>
        </Row>
        <Row>
          <p style={{fontSize: 20}}>Email</p>
          <p style={{fontSize: 15}}>janedoe@email.com</p>
        </Row>{" "}
        <Row>
          <p style={{fontSize: 20}}>Balance</p>
          <p style={{fontSize: 15}}>$1,000,000</p>
        </Row>{" "}
      </Col>{" "}
      <Col md={6}>
        <h2 className="text-center"> My Orders </h2>{" "}
      </Col>{" "}
    </Row>
  );
};

export default ProfileScreen;
