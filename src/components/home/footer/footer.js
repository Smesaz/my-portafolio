import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer class="main-footer">
    <div class="main-container">
      <div class="main-footer__upper">
        <div class="main-footer__row main-footer__row-1">
          <h2 class="heading heading-sm main-footer__heading-sm">
            <span>Redes Sociales</span>
          </h2>
          <div class="main-footer__social-cont">
          <a href="https://www.linkedin.com/in/sebastianmesazafra/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Smesaz">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.researchgate.net/profile/Sebastian-Mesa-4">
            <i class="fab fa-researchgate"></i>
          </a>
          <a href="https://www.instagram.com/sebastianmesaz/">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.strava.com/athletes/47889500">
            <i class="fab fa-strava"></i>
          </a>
          </div>
        </div>
        <div class="main-footer__row main-footer__row-2">
        <h2 class="heading heading-sm main-footer__heading-sm">
            <span>Educación</span>
          </h2>
          <p class="main-footer__short-desc">
            Universidad El Bosque <br></br>
            Henry
          </p>
        </div>
      </div>
  
      <div class="main-footer__lower">
        &copy;  {new Date().getFullYear()} Todos los derechos reservados Portafolio <strong>Sebastian Mesa Zafra</strong>
      </div>
    </div>
  </footer>
  )
};

export default Footer;
