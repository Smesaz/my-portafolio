import React from 'react';
import { Link } from "react-scroll";
import './aboutMe.css';
const AboutMe = () => {
  return (
    <section id="aboutme" class="about sec-pad">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-med">
        <span class="heading-sec__main">Acerca de mi</span>
      </h2>
      <div class="about__content">
        <div class="about__content-main">
          <h3 class="about__content-title">Conoceme!</h3>
          <div class="about__content-details">
            <p class="about__content-details-para">
              Hola soy 
              <strong> Sebastian Mesa</strong>,
              <strong> Ingeniero Electrónico </strong> y
              <strong> Desarrollador Web Full Stack, </strong>
              con capacidades y habilidades en el desarrollo de proyectos en las areas de frontend y backend,
              utilizando  diferentes librerias y frameworks en el lenguaje de <strong>JavaScript</strong>. 
               Adicionalmente tengo conocimientos en control, robótica y telecomunicaciones; he realizado diferentes proyectos de automatización 
               y miniaturización de antenas de comunicación para la radiación de tejidos hipertérmicos.
            </p>
            <p class="about__content-details-para">
              En mi experiencia laboral hice parte de un equipo de trabajo orientado al diseño, implementación y contrucción de proyectos satelitales tipo <strong>CubeSat</strong> y <strong>CanSat</strong> educativos.
            </p>
            <p class="about__content-details-para">
            Actualmente soy asistente de enseñanza en el bootcamp de <strong>Henry,</strong> donde mi labor es guiar el aprendizaje
             de un grupo de estudiantes con el fin de mejorar sus habilidades en programación.

            </p>
          </div>
          <Link 
          to="contactme" 
          smooth={true}
          duration={600}
          exact="true"
          offset={0}
          color={'#fff'}
          // activeClass="active"
          className="btn contact-btn"
            >Contáctame</Link>
        </div>
        <div class="about__content-skills">
          <h3 class="about__content-title">Habilidades</h3>
          <div class="skills">
            <div class="skills__skill">HTML <img src="https://img.icons8.com/color/30/000000/html-5--v1.png" alt=""/></div>
            <div class="skills__skill">CSS <img src="https://img.icons8.com/color/30/000000/css3.png" alt="" /></div>
            <div class="skills__skill">JavaScript <img src="https://img.icons8.com/color/30/000000/javascript--v1.png" alt="" /></div>
            <div class="skills__skill">React <img src="https://img.icons8.com/office/30/000000/react.png" alt="" /></div>
            <div class="skills__skill">Redux <img src="https://img.icons8.com/color/30/000000/redux.png" alt="" /></div>
            <div class="skills__skill">Node JS <img src="https://img.icons8.com/fluency/30/000000/node-js.png" alt="" /></div>
            <div class="skills__skill">PostgreSQL <img src="https://img.icons8.com/color/30/000000/postgreesql.png" alt="" /></div>
            <div class="skills__skill">Git <img src="https://img.icons8.com/color/30/000000/git.png" alt="" /></div>
            <div class="skills__skill">Arduino <img src="https://img.icons8.com/fluency/30/000000/arduino.png" alt="" /></div>
            <div class="skills__skill">Matlab <img src="https://img.icons8.com/fluency/30/000000/matlab.png" alt="" /></div>
            <div class="skills__skill">Raspberry Pi <img src="https://img.icons8.com/color/30/000000/raspberry-pi.png" alt="" /></div>
            <div class="skills__skill">Metodologías Ágiles <img src="https://img.icons8.com/external-soft-fill-juicy-fish/30/000000/external-agile-agile-development-soft-fill-soft-fill-juicy-fish-5.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default AboutMe;
