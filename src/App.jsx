import React, { useEffect, useState } from "react";
import Header from "./componant/common/header/Header";
import Footer from "./componant/common/footer/Footer";
import LayoutContainer from "./componant/layout/LayoutContainer";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./NavLink/Routes";
import CartList from "./pages/CartList";

export default function App() {
  const [products, setProducts] = useState([]);
  const [filterdata, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(""); // State to store feedback message

  async function fetchProducts() {
    setLoading(true);
    try {
      const [data1, data2, data3] = await Promise.all([
        fetch("https://dummyjson.com/products"),
        fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product"),
        fetch("https://fakestoreapi.com/products"),
      ]);

      if (!data1.ok || !data2.ok || !data3.ok) {
        throw new Error("Failed to fetch data from one or more APIs");
      }

      const res1 = await data1.json();
      const res2 = await data2.json();
      const res3 = await data3.json();

      const res1Uniqueid = res1?.products.map((product, index) => ({
        ...product,
        uniqueid: `${
          product.name ? product.name.slice(0, 4) : product.title.slice(0, 4)
        }_${product.id}_${index}`,
      }));

      const res2Uniqueid = res2?.map((product, index) => ({
        ...product,
        uniqueid: `${
          product.name ? product.name.slice(0, 4) : product.title.slice(0, 4)
        }_${product.id}_${index}`,
      }));

      const res3Uniqueid = res3?.map((product, index) => ({
        ...product,
        uniqueid: `${
          product.name ? product.name.slice(0, 4) : product.title.slice(0, 4)
        }_${product.id}_${index}`,
      }));

      const mergedProducts = [
        ...res1Uniqueid,
        ...res2Uniqueid,
        ...res3Uniqueid,
      ];

      setProducts(mergedProducts);
      setFilteredProducts(mergedProducts); // Initialize filtered products
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Function to filter data without using useCallback
  const filterData = (value) => {
    if (!value) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        (item.title || item.name || "")
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.uniqueid === product.uniqueid
    );

    if (existingProduct) {
      setMessage("Product is already added in cart");
    } else {
      setCart((prevCart) => [...prevCart, product]);
      setMessage("Product added to cart successfully");
    }

    // Clear the message after a few seconds
    setTimeout(() => setMessage(""), 3000);
  };

  console.log(cart)
  return (
    <BrowserRouter>
      <Header searchValue={filterData} cart={cart} />
      {message && <div className="message">{message}</div>}
      <Links></Links>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutContainer
              product={{ products: filterdata, loading, error }}
            />
          }
        />
        <Route
          path="/productdetails/:id"
          element={<ProductDetails products={products} addToCart={addToCart} />}
        />

        <Route
          path="/cart-list"
          element={<CartList cart={cart} setCart={setCart} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
