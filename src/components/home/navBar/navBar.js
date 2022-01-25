import React,  { useState, useEffect } from 'react';
import { animateScroll, Link } from "react-scroll";
import './navBar.css';
// import menuIcon from '../../../assets/home/ham-menu.svg';
// import menuCloseIcon from '../../../assets/home/ham-menu-close.svg';

const NavBar = () => {

  const [menu, setMenu] = useState(false)
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("animateScroll", changeNav);
    return () => {
      window.removeEventListener("animateScroll", changeNav);
    };
  }, []);
  const toogleHome = () => {
    animateScroll.scrollToTop();
    console.log(animateScroll.scrollToTop());
  };

  const sideBar = () =>{
    let x = document.getElementById("header__sm-menu");
    setMenu(!menu);
    if(x.classList.contains('header__sm-menu--active')){
      x.classList.remove('header__sm-menu--active') 
    } else {
      x.classList.add('header__sm-menu--active')
    }
  }

  return (
    <header class="header">
      <div class="header__content" scrollNav={scrollNav}>
        <div class="header__logo-container">
          <Link 
          onClick={toogleHome}
          class="header__logo-sub">Sebastian Mesa Zafra</Link>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <Link 
              to="aboutme" 
              smooth={true}
              duration={600}
              exact="true"
              offset={0}
              activeClass="active"
              class="header__link">Acerca de mi </Link>
            </li>
            <li class="header__link-wrapper">
            <Link 
              to="projects" 
              smooth={true}
              duration={600}
              exact="true"
              offset={0}
              activeClass="active"
              class="header__link">Proyectos </Link>
            </li>
            <li class="header__link-wrapper">
            <Link 
              to="contactme" 
              smooth={true}
              duration={600}
              exact="true"
              offset={0}
              activeClass="active"
              class="header__link">Contáctame </Link>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont"  onClick={sideBar}>
            { menu?
            (
              <img
              // src={menuCloseIcon}
              src="https://img.icons8.com/external-gliphyline-royyan-wijaya/64/000000/external-arrow-arrow-me-glyph-gliphyline-royyan-wijaya-38.png"
              alt="hamburger menu close"
              class="header__main-ham-menu"
              
            />
            ):(
              <img
              // src={menuIcon}
              // src="https://img.icons8.com/stickers/50/000000/menu.png"
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-grid-alignment-and-tools-kiranshastry-lineal-kiranshastry-1.png"
              alt="hamburger menu"
              class="header__main-ham-menu"
              
            />
            )}
            
          </div>
        </div>
      </div>
      <div class="header__sm-menu" id="header__sm-menu">
        <div class="header__sm-menu-content">
        <ul class="header__sm-menu-links">
           <li class="header__sm-menu-link">
           <Link 
              to="aboutme" 
              smooth={true}
              duration={600}
              exact="true"
              offset={-20}
              onClick={sideBar}
              class="header__link">Acerca de mi </Link>
          </li>

          <li class="header__sm-menu-link">
          <Link 
              to="projects" 
              smooth={true}
              duration={600}
              exact="true"
              offset={-20}
              onClick={sideBar}
              activeClass="active"
              class="header__link">Proyectos </Link>
          </li>

          <li class="header__sm-menu-link">
          <Link 
              to="contactme" 
              smooth={true}
              duration={600}
              exact="true"
              offset={-20}
              onClick={sideBar}
              activeClass="active"
              class="header__link">Contáctame </Link>
          </li>
          </ul>
        </div>
      </div>
    </header>
  )
};

export default NavBar;
