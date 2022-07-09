import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'


const CartInfo = ({productCart}) => {

  const dispatch = useDispatch()

  const deletProductFromCart = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productCart.id}`
    axios.delete(URL, getConfig())
    .then(res => {
      console.log(res.data)
      dispatch(getAllProductsCart())
    })
    .catch(err => console.log(err.data))
  }
 
  return (
    <article className='product__cart'>
      <div className='product__container-title-btn'>
      <div className='product__title'>
      <p className='product__title-brand'>{productCart?.brand}</p>
      <h3 className='product__title-h3'>{productCart?.title}</h3>
      <div className='product__title-quantity'>{productCart?.productsInCart.quantity}</div>
      </div>
      <div className='product__btn-delete'>
      <i onClick={deletProductFromCart} className="fa-solid fa-trash-can"></i>
      </div>
      </div>

      <div className='product__container-price'>
      <p><span>Total </span>${productCart?.price}</p>
      </div>
     
    </article>
  )
}

export default CartInfo