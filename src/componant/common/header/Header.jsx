import React, { useCallback } from "react";
import { debounce } from "../../../utils/debounce";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

export default function Header({ searchValue }) {
  // Validate that searchavalue is a function
  if (typeof searchValue !== "function") {
    console.error("searchavalue prop must be a function");
    return null;
  }

  // Debounce the search value function to avoid excessive calls
  // const debouncedSearch = useCallback(
  //   debounce((value) => {
  //     searchValue(value);
  //   }, 300), // 300ms delay for debounce
  //   [searchValue]
  // );

  const handleInput = (e) => {
    searchValue(e.target.value.toLowerCase());
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">LuxeStyle</Link>{" "}
          </div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Women</a>
            <a href="#">Men</a>
            <a href="#">Kids</a>
            <a href="#">Sale</a>
            <div className="search-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
                onChange={handleInput}
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="cart-icons">
            {" "}
            <CiShoppingCart className="cart" /> <p>1</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
