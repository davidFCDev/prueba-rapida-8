import "./App.css";
import { useState } from "react";
import Products from "./components/Products";
import { Footer } from "./components/Footer";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";

function App() {
  const [products] = useState(initialProducts);

  const { filters, filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </div>
  );
}

export default App;
