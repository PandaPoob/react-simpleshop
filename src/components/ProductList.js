import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <section className="ProductList">
      {products.map((p) => (
        <Product {...p} />
      ))}
    </section>
  );
}
