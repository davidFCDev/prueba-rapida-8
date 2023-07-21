import "./App.css";
import { useState } from "react";
import Products from "./components/Products";
import { Footer } from "./components/Footer";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";

function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { setFilters, filterProducts };
}

function App() {
  const [products] = useState(initialProducts);

  const { setFilters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default App;
