export default function Product(props) {
  return (
    <article>
      <h2>{props.productdisplayname}</h2>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`}
        alt="product img"
      />
      <p>{props.price}</p>
    </article>
  );
}
