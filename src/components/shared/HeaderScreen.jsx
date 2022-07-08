import React, { useRef } from "react";
import { Link, NavLink } from 'react-router-dom'
import '../shared/HeaderScreen.css'
import image from '../../assets/images/logos/homies-shop-logo.png'
// import image1 from '../../images/logos/Homies.png'

const HeaderScreen = () => {

    const navbar = useRef()
    const lineOneActive = useRef()
    const lineTwoActive = useRef()
    const lineThreeActive = useRef()


    const clickMenuHam = () => {
        lineOneActive.current?.classList.toggle('activeline1__bars-menu')
        lineTwoActive.current?.classList.toggle('activeline2__bars-menu')
        lineThreeActive.current?.classList.toggle('activeline3__bars-menu')
        navbar.current.classList.toggle('navbar__open')
    }

  return (
    <header className="header">
      <div className="header__img">
        <Link to='/'>
        <img src={image}/>
        </Link>
        
      </div>
      <div className="bars__menu" onClick={clickMenuHam}>
        <span ref={lineOneActive} className="line1__bars-menu"></span>
        <span ref={lineTwoActive} className="line2__bars-menu"></span>
        <span ref={lineThreeActive} className="line3__bars-menu"></span>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink to="/login" 
            className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
            <i className="fa-solid fa-user"></i>
            <p className="navbar__label">Acceso</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink to="/purchases" 
            className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
            <i className="fa-solid fa-store"></i>
            <p className="navbar__label">Compras</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink to="/cart" 
            className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="navbar__label">Carrito</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderScreen;
