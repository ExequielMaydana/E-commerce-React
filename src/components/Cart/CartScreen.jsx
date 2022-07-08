import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import { useSelector } from 'react-redux/es/exports'
import '../Cart/styleCart.css'
import CartInfo from './CartInfo'

const CartScreen = () => {


  const postPurchase = () => {

    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios
      .post(URL, objPurchase, getConfig())
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }

  const cart = useSelector(state => state.cart)

  console.log(cart);

  return (
    <div className='container__cart-btn'>
      <div className='container__cart'>
        <h2>Carrito de compras</h2>
        {
          cart?.map(productCart => (
            
            <CartInfo
            key={productCart.id}
            productCart={productCart}
            />
            
          ))
        }
        </div>
        <div className='cart__btn-purchase'>
        <button onClick={postPurchase}>confirm purchase</button>
        </div>
    </div>
  )
}

export default CartScreen