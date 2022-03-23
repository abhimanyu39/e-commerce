import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  const [sideBarShow, setSideBarShow] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Container fluid style={{ padding: 0 }}>
          <NavBar setSideBar={setSideBarShow} />
          <SideBar show={sideBarShow} setSideBar={setSideBarShow} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<Product />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
