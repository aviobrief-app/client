import { ReactComponent as PinkBackground } from 'assets/svg/PinkBackground.svg';
import { ReactComponent as BasketWithItems } from 'assets/svg/BasketWithItems.svg';
import { ReactComponent as ManRunning } from 'assets/svg/ManRunning.svg';

import RegisterOwnerForm from '../forms/RegisterOwnerForm/RegisterOwnerForm';


import './RegisterOrganizationOwner.scss';
const RegisterOrganizationOwner = () => {


    return (
        <main>
            <section className="register-organization-owner">
                <aside className="left-graphics">
                    <PinkBackground className="pink-background" />
                    <BasketWithItems className="basket" />
                    <ManRunning className="human" />
                </aside>
                <RegisterOwnerForm />
            </section>
        </main>
    )
}

export default RegisterOrganizationOwner;