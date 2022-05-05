import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleProduct() {
  const params = useParams();
  console.log(params.id);
  const [product, setProduct] = useState({});
  //navn på array - det er det der er state, navn på funktion - det skal kalde state (rebuilde)

  useEffect(() => {
    //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
    async function getProduct() {
      const res = await fetch(
        `https://kea-alt-del.dk/t7/api/products/${params.id}`
      );
      const data = await res.json();
      setProduct(data);
    }
    getProduct();
  }, [
    params.id,
    //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
  ]);
  console.log(product);
  return (
    <article>
      <h1>{product.productdisplayname}</h1>
      <h2>{product.brandname}</h2>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${params.id}.webp`}
        alt="product img"
      />
      <p>{product.price} kr.</p>
    </article>
  );
}
