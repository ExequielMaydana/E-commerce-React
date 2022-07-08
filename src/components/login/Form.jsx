import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../login/LoginScreen.css";

const From = () => {
  const [isError, setIsError] = useState(false);

  const { handleSubmit, reset, register } = useForm();

  const navigate = useNavigate();

  //aca guardamos el login en el localStorage
  const submit = (data) => {
    console.log(data);
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate("/");
      }) // si el login esta mal, salta un mensaje de error.
      .catch((err) => {
        localStorage.setItem("token", "");
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 4000);
      });
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <ul className="login__test">
          <li>
            <b>Email: </b>mason@gmail.com
          </li>
          <li>
            <b>Password: </b>mason1234
          </li>
        </ul>
        <h2 className="login__title">Enter you information</h2>
        <ul className="login__list">
          <li className="login__item">
            <input
              type="email"
              className="login__input"
              id="login-email"
              required
              {...register("email")}
            />
            <label htmlFor="login-email" className="login__label">
              Email
            </label>
          </li>
          <li className="login__item">
            <input
              type="password"
              className="login__input"
              id="login-pass"
              required
              {...register("password")}
            />
            <label htmlFor="login-pass" className="login__label">
              Password
            </label>
          </li>
        </ul>
        <div className="login__form-error">{isError && "Invalid credentials, try again..."}</div>
        <button className="login__form-btn">Login</button>
      </form>
    </div>
  );
};

export default From;
