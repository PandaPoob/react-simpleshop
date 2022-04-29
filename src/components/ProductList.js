import Product from "./Product";

export default function ProductList({ products, basket, setBasket }) {
  return (
    <section className="ProductList">
      {products.map((p) => (
        <Product key={p.id} setBasket={setBasket} basket={basket} product={p} />
      ))}
    </section>
  );
}
