import { useContext, useState } from "react";
import { BasketContext } from "../contexts/basketContext";

export default function BasketItem({ id, amount, productdisplayname, price }) {
  const { setBasket } = useContext(BasketContext);
  const [isAnimating, setIsAnimating] = useState(false);

  function remove(id) {
    //props.setBasket((old) => old.filter((item) => item.id !== id));
    setBasket((old) => {
      const mapped = old.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.amount = copy.amount - 1;
          return copy;
        }
        return item;
      });

      return mapped.filter((item) => item.amount > 0);
      //setIsAnimating(true);
    });
  }

  return (
    <li key={id} className={isAnimating ? "removing" : null}>
      <button onClick={() => remove(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bag-x-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"
          />
        </svg>
      </button>
      {productdisplayname} {price},- x{amount}
    </li>
  );
}
