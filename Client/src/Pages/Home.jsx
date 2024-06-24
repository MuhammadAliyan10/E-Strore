import React from "react";
import img1 from "../assets/Images/ronaldo.jpg";
import shose from "../assets/Images/Shose.jpg";
import "../assets/Css/Home.css";
import banner1 from "../assets/Images/banner1.avif";
import banner3 from "../assets/Images/banner3.avif";
import banner2 from "../assets/Images/banner2.webp";
import FeaturedProducts from "../Components/FeaturedProducts";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="trending__products">
                <div className="product__box mb-4">
                  <div className="top__info">
                    <span className="label__span">Hot🔥</span>
                    <h4>$50</h4>
                  </div>
                  <div className="product__image">
                    <img src={img1} alt="Ronaldo Euro" />
                  </div>
                  <div className="product__info">
                    <div className="product__details">
                      <h5>Ronaldo Euro Shirt</h5>
                      <p>Sports</p>
                    </div>
                    <button className="primary__button">Buy Now</button>
                  </div>
                </div>
                <div className="product__box">
                  <div className="top__info">
                    <span className="label__span">Hot🔥</span>
                    <h4>$40</h4>
                  </div>
                  <div className="product__image">
                    <img src={shose} alt="Adidas Euro" />
                  </div>
                  <div className="product__info">
                    <div className="product__details">
                      <h5>Adidas Red Thunder</h5>
                      <p>Sports</p>
                    </div>
                    <button className="primary__button">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="carousel-container">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      style={{
                        backgroundImage: `url(${banner1})`,
                        height: "700px",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="overlay"></div>
                      <div className="banner-1">
                        <div className="container">
                          <h2>THE BEST FOOTBALL ITEMS</h2>
                          <h3>E-STORE PAKISTAN</h3>
                          <div className="banner-btn">
                            <button className="primary__button me-3">
                              TRENDING
                            </button>
                            <button className="secondary__button">
                              SPORTS
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="carousel-item"
                      style={{
                        backgroundImage: `url(${banner2})`,
                        height: "700px",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="overlay"></div>
                      <div className="banner-2">
                        <div className="container">
                          <span className="world-class">
                            WORLD CLASS SERVICE
                          </span>
                          <h2>WHEN SERVICE MATTERS</h2>
                          <h3>YOUR CHOICE IS SIMPLE</h3>
                          <button className="secondary__button">
                            PRODUCTS
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="carousel-item"
                      style={{
                        backgroundImage: `url(${banner3})`,
                        height: "700px",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="overlay"></div>
                      <div className="banner-3">
                        <div className="container">
                          <h2>CHOSE THE BEST </h2>
                          <h3>WE BELIEVE IN COSTUMER</h3>
                          <p>
                            We will deal with your failure that determines how
                            you achieve success
                          </p>
                          <button className="primary__button me-3">
                            DISCOUNT ITEMS
                          </button>
                          <button className="secondary__button">
                            TRENDING ITEMS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured__products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main__heading">
                <h2 className="title__border">Featured Products</h2>
              </div>
              <FeaturedProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
