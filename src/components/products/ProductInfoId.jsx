import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsCart } from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";

const ProductInfoId = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch()

  
  const infoPostCart = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";

    const addProductObj = {
      id: product.id,
      quantity: counter,
    };

    axios
      .post(URL, addProductObj, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
        
      })
      .catch((err) => console.log(err.data));
  };

  const minusOne = () => {
    const minus = counter - 1;
    if (minus >= 1) {
      setCounter(minus);
    }
  };

  const plusOne = () => setCounter(counter + 1);

  return (
    <article className="product__info">
      <h2 className="product__info-title">{product?.title}</h2>
      <p className="product__info-description">{product?.description}</p>
      <div className="produc__info-container-item">
        <div className="item__container-price-quantity">
          <div className="item__price">
            <p className="item__price-text">Price</p>
            <p>$ {product?.price}</p>
          </div>
          <div className="item__quantity">
            <p>Cantidad</p>
            <div className="item__quantity-count">
              <div onClick={minusOne} className="item__minus">
                -
              </div>
              <div className="item__valor">{counter}</div>
              <div onClick={plusOne} className="item__mas">
                +
              </div>
            </div>
          </div>
        </div>
        <button onClick={infoPostCart} className="product__info-btn">
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductInfoId;
