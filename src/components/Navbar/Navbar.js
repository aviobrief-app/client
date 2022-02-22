import { useState, useEffect } from 'react';
import { useAuth } from 'contexts/AuthContext';

import { ReactComponent as MobileMenu } from 'assets/svg/MobileMenu.svg';
import ShoppingBagWithItemsCount from 'components/shared/ShoppingBagWithItemsCount/ShoppingBagWithItemsCount';

import './Navbar.scss';
const Navbar = () => {

    const { currentUserClaims } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!currentUserClaims) {
            return;
        }
        setIsLoading(false);
    }, [currentUserClaims])

    return (
        !isLoading && <nav className="navbar">
            <section className="left-section">
                <MobileMenu className="mobile-menu" />
                <div className="user-info">
                    <p className="username">{currentUserClaims.fullName.split(' ')[0]}</p>
                    <p className="organization-name">{currentUserClaims.organizationName}</p>
                </div>
            </section>
            <section className="right-section">
                <ShoppingBagWithItemsCount />
            </section>

        </nav>
    )
}

export default Navbar;