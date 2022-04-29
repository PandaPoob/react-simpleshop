import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ProductList></ProductList>
      <BasketContainer></BasketContainer>
    </div>
  );
}

export default App;
