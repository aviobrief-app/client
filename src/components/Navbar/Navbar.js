

import { ReactComponent as MobileMenu } from 'assets/svg/MobileMenu.svg';
import ShoppingBagWithItemsCount from 'components/shared/ShoppingBagWithItemsCount/ShoppingBagWithItemsCount';

import './Navbar.scss';
const Navbar = () => {
    return (
        <nav className="navbar">
            <section className="left-section">
                <MobileMenu className="mobile-menu" />
                <div className="user-info">
                    <p className="username">Dian</p>
                    <p className="organization-name">Dian and Moni's home</p>
                </div>
            </section>
            <section className="right-section">
                <ShoppingBagWithItemsCount />
            </section>

        </nav>
    )
}

export default Navbar;