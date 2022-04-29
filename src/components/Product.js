export default function Product(props) {
  function add() {
    if (props.basket.find((item) => item.id === props.product.id)) {
      props.setBasket((old) =>
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
      props.setBasket((oldState) => [
        ...oldState,
        { ...props.product, amount: 1 },
      ]);
    }
  }
  return (
    <article>
      <h2>{props.product.productdisplayname}</h2>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`}
        alt="product img"
      />
      <p>{props.product.price}</p>
      <button onClick={add}>Add to basket</button>
    </article>
  );
}
