import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../../assests/styles/slider.scss";

const Slider = ({ title, products }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Card className="m-3 overflow-hidden">
      <Row className="">
        <Col className="d-flex align-items-center item-category">
          <h3>{title}</h3>
        </Col>
        <Row className="d-flex flex-row flex-nowrap overflow-auto px-4 py-2 item-slider">
          {products.map((item) => (
            <Card
              key={item._id}
              className="d-block item-card"
              onClick={() => handleClick(item._id)}
            >
              <Row className="m-auto">
                <img src={item.imageUrl} alt="" height={100} width={200} />
              </Row>
              <Row>
                <Col className="d-flex align-items-center justify-content-center">
                  {item.name}
                </Col>
              </Row>
              <Row>
                <Col className="d-flex align-items-center justify-content-center">
                  $ {item.price}
                </Col>
              </Row>
            </Card>
          ))}
        </Row>
      </Row>
    </Card>
  );
};

export default Slider;
