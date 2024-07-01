import { useState, useEffect } from "react";
import image1 from "../../assets/images/categories images/woman.jpg";
import useFetch from "../../hooks/useFetch";

export default function Categories() {
 

  const [categories, setCategories] = useState();
  const { state, loading, error } = useFetch("");

  console.log(state.products)
  useEffect(() => {
    if (state && state.products) {
      setCategories(state.products);
    }
  }, [state]);

  const renderCategories = () => {
    if (categories.length === 0) {
      return <p>Data not available</p>;
    }

    return categories.map((item, index) => (
   


      <div className="category-card" key={index}>
        <img
          src={item.image || image1}
          alt={`${item.name || item.title}'s Fashion`}
          className="category-image"
        />
        <div className="category-name">{  }</div>
      </div>
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">{renderCategories()}</div>
      </div>
    </section>
  );
}
