import React, { useEffect, useRef, useState } from "react";
import "../home/HomeScreen.css";
import loghome from "../../assets/images/logo-home/logo-home.png";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import InputSearch from "./InputSearch";
import { setProductsGlobal } from "../../store/slices/products.slice";
import CategoryFilter from "./CategoryFilter";

const HomeScreen = () => {


 // en este useState guardo la info que viene del componente InputSeach.jsx
  const[searhProduct, setSearchProduct] = useState()

// en este useState guardo el filtrado del producto por nombre.
  const[searchProductFilter, setSearchProductFilter] = useState()

  const products = useSelector((state) => state.products);
 
  useEffect(() => {
    if(searhProduct){
     setSearchProductFilter(products.filter(e => e.title.toLowerCase().includes(searhProduct.toLowerCase()) === true))
    } 
  },[searhProduct])

  return (
    <article className="home">
      <section className="home__img">
        <img src={loghome} />
        <span></span>
      </section>
      <section className="home__description">
        <p>Bienvenido a Homies Shop</p>
      </section>
      <InputSearch setSearchProduct={setSearchProduct}/>
      <CategoryFilter 
      setSearchProductFilter={setSearchProductFilter}
      products={products}
      />
      <section className="home__container-cards">
        { searchProductFilter ?
          searchProductFilter.map(product => (
          <ProductCard 
          key={product.id}
          product={product}/>
      ))
    : products.map(product => (
      <ProductCard 
      key={product.id}
      product={product}/>
  ))}
        
      </section>
    </article>
  );
};

export default HomeScreen;
