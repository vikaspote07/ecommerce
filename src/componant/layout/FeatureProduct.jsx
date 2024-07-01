/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FeatureProduct({ data }) {
  let { products, loading, error } = data;

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products?.map((item, index) => (
            <Link to={`/productdetails/${item.uniqueid}`}>
              <div className="product-card" key={index}>
                <img
                  src={item.thumbnail || item.preview || item.image}
                  alt={item.name || item.preview}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-title">{item.name || item.title}</h3>
                  <p className="product-price">${item.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
