import { ReactComponent as PinkBackground } from './assets/PinkBackground.svg';
import { ReactComponent as BasketWithItems } from './assets/BasketWithItems.svg';
import { ReactComponent as ManRunning } from './assets/ManRunning.svg';

import RegisterOwnerForm from './RegisterOwnerForm/RegisterOwnerForm';


import './RegisterOrganizationOwner.scss';
const RegisterOrganizationOwner = () => {


    return (
        <section className="register-organization-owner">
            <aside className="left-graphics">
                <PinkBackground className="pink-background" />
                <BasketWithItems className="basket" />
                <ManRunning className="human" />
            </aside>
            <RegisterOwnerForm />
        </section>
    )
}

export default RegisterOrganizationOwner;