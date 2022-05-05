import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import BasketContainer from "../components/BasketContainer";
import styles from "../App.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  //navn på array - det er det der er state, navn på funktion - det skal kalde state (rebuilde)
  const [basket, setBasket] = useState([]);
  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getProducts() {
        const res = await fetch("https://kea-alt-del.dk/t7/api/products");
        const data = await res.json();
        setProducts(data);
      }
      getProducts();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

  return (
    <div className={styles.App}>
      <ProductList
        products={products}
        basket={basket}
        setBasket={setBasket}
      ></ProductList>
      <BasketContainer setBasket={setBasket} basket={basket}></BasketContainer>
    </div>
  );
}

export default Products;
