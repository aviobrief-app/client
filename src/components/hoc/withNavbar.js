import Navbar from 'components/Navbar/Navbar';

const withNavbar = (Component) => {

    return (
        <>
            <Navbar />
            <main>
                <Component />
            </main>
        </>
    )

};

export default withNavbar;