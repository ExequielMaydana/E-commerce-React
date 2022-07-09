import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductInfoId from './ProductInfoId'
import SimilarProduct from './SimilarProduct'
import '../products/styles/stylesProducts.css'

const classImg = ['', 'second-img', 'third-img']
const ProductsScreen = () => {
  
    const[product, setProduct] = useState()
    const[indexClass, setIndexClass] = useState(0)

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))
    }, [id])

    const clickPrev = () => {
        const prevClass = indexClass - 1
        if(prevClass < 0){
            setIndexClass(classImg.length - 1)
        }else{
            setIndexClass(prevClass)
        }
    }

    const clickNext = () => {
        const nextClass = indexClass + 1
        if(nextClass >= classImg.length ) {
          setIndexClass(0)
        } else {
          setIndexClass(nextClass)
        }
      }
    

  return (
    <div className='product'>
        <div className='product__header'>
        <p onClick={() => navigate('/')}>Home</p>
        <span></span>
        <h2>{product?.title}</h2>
        </div>
        <div className='product__container-img-description'>
        <div className='slider'>
        
        <div onClick={clickPrev} className='slider__prev'>&#60;</div>
        <div className={`slider__container ${classImg[indexClass]}`}>
            {
                product?.productImgs.map(imgSrc => (
                    <img className='slider__imgs'
                    key={imgSrc}
                    src={imgSrc}
                    alt=''
                    />
                ))
            }
          
        </div>
        <div onClick={clickNext} className='slider__next'>&#62;</div>
        <div className='puntitos-container'>
            <div onClick={() => setIndexClass(0)} className={indexClass === 0 ? 'puntitos puntitos-active' : 'puntitos'}></div>
            <div onClick={() => setIndexClass(1)} className={indexClass === 1 ? 'puntitos puntitos-active' : 'puntitos'}></div>
            <div onClick={() => setIndexClass(2)} className={indexClass === 2 ? 'puntitos puntitos-active' : 'puntitos'}></div>
        </div>
        
        </div>
        <ProductInfoId product={product}/>
        </div>
        <SimilarProduct product={product}/>
    </div>
  )
}

export default ProductsScreen