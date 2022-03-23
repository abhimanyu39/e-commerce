import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/result.services";
import { Container, Row, Col } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const getProduct = async (id) => {
    const res = await getProductById(id);
    if (res) {
      setItem(res.data[0]);
    }
  };
  useEffect(() => {
    getProduct(id);
  }, []);
  return (
    <Container fluid>
      {item && (
        <Row className="mt-3">
          <Col
            xs="6"
            className="d-flex align-items-center justify-content-center"
          >
            <img src={item.imageUrl} width="90%" height="100%" alt="" />
          </Col>
          <Col xs="6">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h4>$ {item.price}</h4>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Product;
