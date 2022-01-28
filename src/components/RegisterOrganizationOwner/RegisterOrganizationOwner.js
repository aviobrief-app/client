import { ReactComponent as PinkBackground } from './assets/Group 1.svg';
import { ReactComponent as BasketWithItems } from './assets/Group 2.svg';
import { ReactComponent as Human } from './assets/Group 3.svg';

import RegisterOwnerForm from './RegisterOwnerForm/RegisterOwnerForm';


import './RegisterOrganizationOwner.scss';
const RegisterOrganizationOwner = () => {


    return (
        <section className="register-organization-owner">
            <aside className="left-graphics">
                <PinkBackground className="pink-background" />
                <BasketWithItems className="basket" />
                <Human className="human" />
            </aside>
            <RegisterOwnerForm />
        </section>
    )
}

export default RegisterOrganizationOwner;