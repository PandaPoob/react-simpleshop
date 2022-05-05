import { useContext } from "react";
import { BasketContext } from "../contexts/basketContext";
//import { useState } from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  //const [showMore, setShowMore] = useState(false);
  const { basket, setBasket } = useContext(BasketContext);

  function add() {
    if (basket.find((item) => item.id === props.product.id)) {
      setBasket((old) =>
        old.map((item) => {
          if (item.id === props.product.id) {
            const copy = { ...item };
            copy.amount++;
            return copy;
          }
          return item;
        })
      );
    } else {
      setBasket((oldState) => [...oldState, { ...props.product, amount: 1 }]);
    }
  }
  return (
    <article className="Product">
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`}
        alt="product img"
      />
      <h2>{props.product.productdisplayname}</h2>
      <p>{props.product.price} kr.</p>
      <div className="button-wrapper">
        <button className="article-button" onClick={add}>
          Add to basket
        </button>
        <Link to={`/products/${props.product.id}`}>Read More</Link>
        {/*  <button
          className="article-button"
          onClick={() => setShowMore((old) => !old)}
        >
          Read more
        </button>{" "} */}
      </div>
      {/*  <div style={{ display: showMore ? "block" : "none" }}>
        <p>extra info hihihihi</p>
      </div> */}
    </article>
  );
}
