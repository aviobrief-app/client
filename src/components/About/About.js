import { Link } from 'react-router-dom';

import { ReactComponent as AboutPageBackground } from './assets/AboutPageBackground.svg';

import './About.scss';


const About = () => {
    return (
        <section className="about">
            <section className="left">

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