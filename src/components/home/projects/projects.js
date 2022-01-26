import React from 'react';
import './projects.css';
import screen from '../../../assets/home/grade-Project.jpeg';

const Projects = () => {
  return (
    <section id="projects" class="projects sec-pad">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main">Proyectos</span>
        <span class="heading-sec__sub">
          Proyectos realizados como <strong>Desarrollador Full Stack</strong>
        </span>
      </h2>
  
      <div class="projects__content">
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <iframe title='DingbellApp' src="https://player.vimeo.com/video/669002212?h=cdc0c175e6" className='projects__row-video' width={'90%'} height={'100%'}  frameborder="0" allow="autoplay; fullscreen;" allowfullscreen />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Dingbell App</h3>
            <p class="projects__row-content-desc">
              Aplicación orientada al control de ordenes por parte de los clientes,
              meseros, o cocineros, y la gestión administrativa para locales gastronómicos.
            </p>
            <p class="projects__row-content-desc">
              <strong>Tecnologías utilizadas:</strong> JavaScript, Node & Express, PostgreSQL & Sequelize, React, Redux, CSS3 & TailWind.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://restobares-app.web.app/"
              class="btn primary-btn2"
              >Abrir App</a
            >
          </div>
        </div>
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <iframe title='Dog Breeds App' src="https://player.vimeo.com/video/653734306?h=f0c9ff753d"  className='projects__row-video' width={'90%'} height={'100%'}   frameborder="0" allow="autoplay; fullscreen;" allowfullscreen />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Dog Breeds App</h3>
            <p class="projects__row-content-desc">
              Aplicación web con la funcionalidad de filtrar, ordenar, buscar y crear razas
               de perros utilizando la API externa "TheDogApi". 
            </p>
            <p class="projects__row-content-desc">
              <strong>Tecnologías utilizadas:</strong> JavaScript, Node & Express, PostgreSQL & Sequelize, React, Redux, CSS.
            </p>
            <a
              href="/"
              class="btn isDisabled primary-btn2"
              disabled
              target="_blank"
              >Abrir App</a>
          </div>
        </div>
        <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__sub">
          Proyectos realizados como <strong>Ingeniero Electrónico</strong>
        </span>
      </h2>
      <div class="projects__row">
          <div class="projects__row-img-cont">
            <img
            src={screen}
            alt='grade-project'
            class='projects__row-img'
            target='_blank' />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title" >Sonda Coaxial para la medición de permitividad en líquidos</h3>
            <p class="projects__row-content-desc">
              Desarrollo de una herramienta de medición para lograr calibrar el nivel de hipertermia en 
              simuladores de tejidos cancerígenos, por medio de la permitividad compleja presente en 
              las mezclas líquidos que conforman el fantoma (elemento de caracteristicas similares a los
              del organismo o tejidos humanos).
            </p>
            <a
              class="btn primary-btn2"
              rel="noreferrer"
              href="https://www.researchgate.net/publication/354115334_Desarrollo_de_una_sonda_coaxial_para_la_medicion_de_la_permitividad_en_liquidos"
              target="_blank"
              >Abrir Documento</a>
          </div>
        </div>
      <div class="projects__row">
          <div class="projects__row-img-cont">
            <iframe title='Pipeta Automática' src="https://player.vimeo.com/video/669013710?h=d1033e49f3"  className='projects__row-video' width={'90%'} height={'100%'}   frameborder="0" allow="autoplay; fullscreen;" allowfullscreen />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Pipeta Automática</h3>
            <p class="projects__row-content-desc">
              Proyecto de Bio-instrumentación que tiene como objetivo crear procesos de 
              pipeteo automatizados con la finalidad de obtener la concentración de azucar 
              en el agua en mediciones de mg/ml.
            </p>
          </div>
        </div>
      <div class="projects__row">
          <div class="projects__row-img-cont">
            <iframe title='Dog Breeds App' src="https://player.vimeo.com/video/669019129?h=6dff136ea4"  className='projects__row-video' width={'90%'} height={'100%'}   frameborder="0" allow="autoplay; fullscreen;" allowfullscreen />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Brazo Robótico Didáctico</h3>
            <p class="projects__row-content-desc">
              Dispositivo educativo para niños de jardin infantíl en donde se logra la enseñanza
              de las diferentes partes que componen la mano mediante juegos como piedra, papel o tijera.  
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Projects;
