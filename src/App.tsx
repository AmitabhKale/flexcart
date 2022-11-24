import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { ShoppingCartProvider } from "./context/CartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
