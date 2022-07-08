import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProductsCart} from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";

const ProductCard = ({ product }) => {
  // este navigate lo uso en el button "ver mas" para ir al shop
  const navigate = useNavigate();

  const dispatch = useDispatch()

  // addProductCart agrega el producto al carrito
  const addProductCart = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    const obj = {
      id: product.id,
      quantity: 1,
    };
    axios
      .post(URL, obj, getConfig())
      .then((res) => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <article className="card__product">
      <header className="card__product-header">
        <img
          className="card__product-img-back"
          src={product.productImgs[1]}
          alt=""
        />
        <img
          className="card__product-img"
          src={product.productImgs[0]}
          alt=""
        />
      </header>
      <div className="card__product-body">
        <h2 className="card__product-title">{product.title}</h2>
        <div className="card__product-body-row">
          <div className="card__product-price-container">
            <h3 className="card__product-price-label">Precio</h3>
            <p className="card__product-price-number">$ {product.price}</p>
            <button
              onClick={() => navigate(`/shop/${product.id}`)}
              className="card__product-btn-ver"
            >
              Ver mas
            </button>
          </div>
          <button onClick={addProductCart} className="card__product-btn">
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
