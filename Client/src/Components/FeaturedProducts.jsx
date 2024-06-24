import React, { useState } from "react";
import img1 from "../assets/Images/ronaldo.jpg";
import "../assets/Css/Products.css";

const FeaturedProducts = () => {
  const [featuredProducts] = useState([
    {
      id: 1,
      name: "Ronaldo Euro Shirt",
      category: "Sports",
      tag: "Hot",
      price: 50,
      image: img1,
    },
    {
      id: 2,
      name: "Ronaldo Euro Shirt",
      category: "Sports",
      tag: "Hot",
      price: 50,
      image: img1,
    },
    {
      id: 3,
      name: "Ronaldo Euro Shirt",
      category: "Sports",
      tag: "Hot",
      price: 50,
      image: img1,
    },
    {
      id: 4,
      name: "Ronaldo Euro Shirt",
      category: "Sports",
      tag: "Hot",
      price: 50,
      image: img1,
    },
    {
      id: 5,
      name: "Ronaldo Euro Shirt",
      category: "Sports",
      tag: "Hot",
      price: 50,
      image: img1,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="featured-products">
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredProducts.map((product) => (
            <div className="carousel-item" key={product.id}>
              <div className="product">
                <div className="product-image">
                  <span className="label">{product.tag}</span>
                  <img src={product.image} alt={product.name} />
                  <div className="option-items">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-cart-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-details-left">
                    <h5>{product.name}</h5>
                    <p>{product.price}$</p>
                  </div>
                  <div className="product-details-right">
                    <h5>{product.category}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
