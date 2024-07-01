import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productdetails.css";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = products.find((item) => item.uniqueid === id);
    setProduct(fetchedProduct);
  }, [id, products]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <main className="product-details">
      <div className="product-images">
        <img
          src={product.thumbnail || "https://via.placeholder.com/500"}
          alt={product.title || "Product Image"}
          className="main-image"
        />
        <div className="thumbnail-images">
          {product.images?.slice(1, 4).map((img, index) => (
            <img key={index} src={img} alt={`Thumbnail ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-options">
          <label htmlFor="size">Size:</label>
          <select id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">XL</option>
          </select>

          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" min="1" defaultValue="1" />
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>

        <div className="product-reviews">
          <h3>Customer Reviews</h3>
          {product.reviews?.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="review">
                <p className="review-text">{review.comment}</p>
                <p className="review-author">- {review.author}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
