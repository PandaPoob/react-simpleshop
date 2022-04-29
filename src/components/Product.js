export default function Product(props) {
  function add() {
    props.setBasket((oldState) => [...oldState, props.product]);
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
