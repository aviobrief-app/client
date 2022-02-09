import Navbar from 'components/Navbar/Navbar';

const withNavbar = (Component) => {

    return (
        <section className="navbar-wrapper">
            <Navbar />
            <Component />
        </section>
    )

};


export default withNavbar;