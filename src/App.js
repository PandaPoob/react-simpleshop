import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";
import styles from "./App.module.css";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div className={styles.App}>
      <Nav></Nav>
      <ProductList products={products}></ProductList>
      <BasketContainer></BasketContainer>
    </div>
  );
}

export default App;
