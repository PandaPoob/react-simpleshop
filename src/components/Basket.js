import { useContext } from "react";
import { BasketContext } from "../contexts/basketContext";
import BasketItem from "./BasketItem";

export default function Basket(props) {
  const { basket } = useContext(BasketContext);
  const initialValue = 0;
  const sumWithInitial = basket.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.amount * currentValue.price,
    initialValue
  );

  return (
    <div>
      <ul>
        {basket.map((item) => {
          return <BasketItem key={item.id} {...item}></BasketItem>;
        })}
      </ul>
      <h3>Total: {sumWithInitial}kr.</h3>
    </div>
  );
}
