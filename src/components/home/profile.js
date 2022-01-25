import React from 'react'
import Typical from 'react-typical'
import './profile.css';
const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
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
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hola, Soy <span className='highlighted-text'>Sebastian</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Desarrollador Full Stack 👨‍💻",
                                2000,
                                "Ingeniero Electrónico 🤖",
                                2000,
                                "Maratonista🏃",
                                2000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Pasión por la programación de software-hardware y la automatización. 
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <a href='cv_Sebastian_Mesa_Z.pdf' download='SebastianMesaCV.pdf'>
                        <button className='btn primary-btn'>
                        {" "}
                        CV en Español 
                        </button>
                    </a>
                    <a href='CV_Sebastian_Mesa_Zafra.pdf' download='SebastianMesaCV.pdf'>
                        <button className='btn highlighted-btn'>
                        {" "}
                        CV en Inglés 
                        </button>
                    </a>
                </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        <div class="hero__mouse-scroll-cont">
        <div class="mouse"></div>
        </div>
    </div>
    )
}

export default Profile;