import React, {useState} from 'react';
import './home.css';
import Profile from './profile';
import FooterH from './footerH';
import NavBar from './navBar/navBar';
import AboutMe from './aboutMe/aboutMe';
import Projects from './projects/projects';
import ContactMe from './contactMe/contactMe';
import Footer from './footer/footer';


const Home = () => {

  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
      <div className='home-container'>
          <NavBar toggle={toggle}/>
          <Profile/>
          <FooterH/>
          <AboutMe/>
          <Projects/>
          <ContactMe/>
          <Footer/>
      </div>
  );
};

export default Home;
