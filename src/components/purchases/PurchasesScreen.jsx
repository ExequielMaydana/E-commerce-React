import axios from "axios";
import React, { useEffect, useState } from "react";
import getConfig from "../../utils/getConfig.js";
import CardPurchases from "./CardPurchases.jsx";
import { useNavigate } from "react-router-dom";
import '../purchases/styles/stylesPurchases.css'

const PurchasesScreen = () => {
  /* guardamos la informacion del login en el localStorage y 
  
      const config = {
       headers: {
       Authorization: `Bearer ${localStorage.getItem('token')}`
       }
     }
*/
  const [purchases, setPurchases] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";

    axios
      .get(URL, getConfig())
      .then((res) => setPurchases(res.data.data.purchases))
      .catch((err) => console.log(err));
  }, []);

  return<div className="container__card-purchases">
    <div className='purchases__header'>
        <p onClick={() => navigate('/')}>Home</p>
        <span></span>
        <h2>Purchases</h2>
        </div>
    {
      purchases?.map(purchase => (
        <CardPurchases
        key={purchase.id}
        purchase={purchase}
        />
      ))
    }
  </div>;
};

export default PurchasesScreen;
