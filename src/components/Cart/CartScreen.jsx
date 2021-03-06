import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import '../Cart/styles/styleCart.css'
import CartInfo from './CartInfo'
import { setCartGlobal } from '../../store/slices/cart.slice'

const CartScreen = () => {

  const dispatch = useDispatch()
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
      .then((res) => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch((err) => console.log(err.data));
  }

  const cart = useSelector(state => state.cart)

  //acc = acumulador, cv = currentValue
  let totalPriceCart = 0
  if(cart){

    const cb = (acc, cv) => {
      return acc + (parseFloat(cv.price) * cv.productsInCart.quantity)
    }

    totalPriceCart =   cart.reduce(cb, 0)
  
  }

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
          {
            cart ? <h2>Total: $<span>{totalPriceCart}</span></h2>
            : <h2>No has agregado nada al carrito!</h2>
          }
        <button onClick={postPurchase}>confirm purchase</button>
        </div>
    </div>
  )
}

export default CartScreen