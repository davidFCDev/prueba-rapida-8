import "./App.css";
import { useState } from "react";
import Products from "./components/Products";
import { Footer } from "./components/Footer";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { IS_DEVELOPMENT } from "./config.js";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}

export default App;
