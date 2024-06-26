/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./componant/commen/header/Header";
import Footer from "./componant/commen/footer/Footer";
import Hero from "./componant/commen/hero/Hero";
import Categories from "./componant/commen/Categories/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import ProductDetails from "./pages/product details/productDetails";

import Products from "./componant/commen/Product/Products";
import Loading from "./services/loading spinner/Loading";

export default function App() {
  let { state, loading, error } = useFetch(
    "https://dummyapi.online/api/products"
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!state) return "fetching..";
  if (!state) {
    return <p>No data available</p>;
  }

  console.log(state);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />

        <Routes>
          <Route psath="/products" element={<Products product={state} />} />
          <Route
            path="/productdetails:/id"
            element={<ProductDetails product={state} />}
          />
        </Routes>

        <Products product={state} />
        <Categories />
        <Footer />
      </BrowserRouter>
    </>
  );
}
