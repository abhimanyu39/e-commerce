import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../assests/styles/sideBar.scss";

const SideBar = ({ show, setSideBar }) => {
  const navigate = useNavigate();
  const sideBarClass = ["wrapper bg-secondary text-light"];
  const sideBarMenu = [
    {
      label: "Home",
      route: "/home",
    },
    {
      label: "Products",
      route: "/products",
    },
    {
      label: "Cart",
      route: "/cart",
    },
  ];
  const handleClick = (link) => {
    navigate(link);
  };
  if (show) {
    sideBarClass.push("show");
  }
  return (
    <Container className={sideBarClass.join(" ")}>
      <Row>
        <Col className="text-right">
          <button className="btn text-light" onClick={() => setSideBar(false)}>
            <i
              className="icon bi-x-lg icon-lg color-light"
              style={{ fontSize: "25px" }}
            />
          </button>
        </Col>
      </Row>
      {sideBarMenu.map((item) => (
        <Row onClick={() => handleClick(item.route)}>
          <Col className="side-menu">{item.label}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default SideBar;
