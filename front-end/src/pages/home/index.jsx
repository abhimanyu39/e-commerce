import React, { useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import "../../assests/styles/home.scss";
import { getAllProducts } from "../../services/result.services";
import Slider from "../../components/home/slider";

const Home = () => {
  const [products, setProducts] = useState();
  const getProducts = async () => {
    const res = await getAllProducts();
    if (res) {
      setProducts(res.data);
    }
  };
  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "http://localhost:5000/api/products/addnew",
    //   data: payload,
    //   withCredentials: false,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => console.log(res));
    getProducts();
  }, []);
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-20"
            src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
            alt=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
            alt=""
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
            alt=""
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid className="slider-container">
        {products ? (
          <>
            <Slider products={products} title="Smartphones" />
            <Slider products={products} title="Electronics" />
            <Slider products={products} title="Home Appliances" />
            <Slider products={products} title="Furnitures" />
          </>
        ) : null}
      </Container>
    </>
  );
};

export default Home;
