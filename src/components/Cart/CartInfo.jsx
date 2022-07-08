import React from 'react'

const CartInfo = ({productCart}) => {
 
  return (
    <div>{productCart?.title}</div>
  )
}

export default CartInfo