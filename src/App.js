import { Link, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import SingleProduct from "./routes/SingleProduct";

export default function App() {
  return (
    <div id="app">
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}
