import React from 'react'

const CardPurchases = ({purchase}) => {
    console.log(purchase.cart.products);
  return (
    <article className='card__purchase'>
        <div className='card__purchase-date'>{purchase?.createdAt}</div>
        {
            purchase.cart.products.map(product => (
                <ul key={product.id} className='card__purchase-list'>
                    <li className='card__product-item'>
                        <div className='card__purchase-img-title'>
                        <img src='' className='card__purchase-img' alt=''/>
                        <div className='card__purchase-title'>{product.title}</div>
                        </div>
                        <div className='card__purchase-container-q-p'>
                        <div className='card__purchase-quantity'>{product.productsInCart.quantity}</div>
                        <div className='card__purchase-price'>$ {product.price}</div>
                        </div>
                    </li>
                </ul>
            ))
        }
    </article>
  )
}

export default CardPurchases