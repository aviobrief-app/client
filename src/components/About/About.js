import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from './assets/Logo.svg';
import { ReactComponent as AboutPageBackground } from './assets/AboutPageBackground.svg';

import ButtonFilled from 'components/shared/ButtonFilled/ButtonFilled';

import './About.scss';


const About = () => {

    const navigate = useNavigate();

    return (
        <section className="about">
            <section className="left">
                <div className="logo">
                    <Logo />
                </div>
                <div className="headers">
                    <p className="header-one">Organize your everyday shopping</p>
                    <p className="header-two">Dont ever forget the grocery list</p>
                </div>
                <div className="buttons">
                    <div className="first-row">
                        <div type="button" className="register-button-container">
                            <ButtonFilled
                                url="/register-organization-owner"
                                text="SIGN UP"
                                fontSize="inherit"
                                fillColor="#E2208A"
                                onClick={(e) => navigate('/register-organization-owner')}
                            />
                        </div>
                        <div type="button" className="watch-video-button-container">
                            <ButtonFilled
                                url=""
                                text="Watch video"
                                fontSize="inherit"
                                fontWeight="inherit"
                                fillColor="#ffffff"
                                color="#E2208A"
                            />
                        </div>
                    </div>
                    <div className="second-row">
                        <p className="question">
                            already registered?
                        </p>
                        <Link to="login" className="login-link">Login here.</Link>
                    </div>
                </div>
                <div className="see-more-section">
                    <p className="see-more">See more</p>
                </div>


            </section>
            <section className="right">
                <nav className="about-menu">
                    <Link to="">How it works</Link>
                    <Link to="">About us</Link>
                    <Link to="">Contacts</Link>
                </nav>
                <AboutPageBackground className="background" />
            </section>

        </section>
    )
}


export default About;