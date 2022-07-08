import React from 'react'

const CartInfo = ({productCart}) => {

  console.log(productCart);
 
  return (
    <article className='product__cart'>
      <div className='product__container-title-btn'>
      <div className='product__title'>
      <p className='product__title-brand'>{productCart?.brand}</p>
      <h3 className='product__title-h3'>{productCart?.title}</h3>
      <div className='product__title-quantity'>{productCart?.productsInCart.quantity}</div>
      </div>
      <div className='product__btn-delete'>
      <i className="fa-solid fa-trash-can"></i>
      </div>
      </div>

      <div className='product__container-price'>
      <p><span>Total </span>{productCart?.price}</p>
      </div>
     
    </article>
  )
}

export default CartInfo