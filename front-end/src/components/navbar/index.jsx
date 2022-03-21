import React from "react";
import { Navbar, NavLink, Row, Col } from "react-bootstrap";

const NavBar = ({ setSideBar }) => {
  return (
    <>
      <Row className="bg-secondary">
        <Col xs="1" className="text-light d-flex align-items-center">
          <button className="btn text-light" onClick={() => setSideBar(true)}>
            <i className="icon bi-list icon-lg" style={{ fontSize: "25px" }} />
          </button>
        </Col>
        <Col
          xs="2"
          className="text-light d-flex align-items-center"
        >
          <h1>My Shop</h1>
        </Col>
        <Col xs="8" class="navbar navbar-light bg-light">
          {/* <Row>
            <Col xs="4" className="text-right">Home</Col>
            <Col xs="4" className="text-right">Product</Col>
            <Col xs="4" className="text-right">Logout</Col>
          </Row> */}
          <Navbar>
            <NavLink className="text-light" href="/home">
              Home
            </NavLink>
            <NavLink className="text-light" href="/product">
              Product
            </NavLink>
            <NavLink className="text-light" href="/product">
              Product
            </NavLink>
          </Navbar>
        </Col>
        <Col
          xs="1"
          className="d-flex align-items-center justify-content-center"
        >
          <button type="button" className="btn btn-outline-light btn-rounded">
            Login
          </button>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
