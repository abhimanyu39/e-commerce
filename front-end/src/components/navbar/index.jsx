import React from "react";
import '../../assests/styles/navbar.scss';
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
        <Col xs="8" className="d-flex align-items-center">
          <input className="search-box" type="text" placeholder="Search here..."/>
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
