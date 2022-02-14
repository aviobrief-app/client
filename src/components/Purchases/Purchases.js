
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';

import SearchBarWithIcon from 'components/shared/SearchBarWithIcon/SearchBarWithIcon';
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';
import { useAuth } from 'contexts/AuthContext';

import ModalBackdrop from 'components/hoc/ModalBackdrop/ModalBackdrop';
import AddPurchaseAndProductForm from 'components/forms/AddPurchaseAndProductForm/AddPurchaseAndProductForm';
import PurchaseCard from 'components/PurchaseCard/PurchaseCard';

import * as organizationService from 'services/organizationService';


import './Purchases.scss';
const Purchases = () => {


    const { contextDisplayModal, contextSetDisplayModal } = useModalBackdropContext();
    const { currentUserClaims } = useAuth();
    const [purchases, setPurchases] = useState(null);

    useEffect(() => {
        organizationService.getOrganizationPurchases(currentUserClaims.organizationId)
            .then(res => setPurchases(res))
            .catch(err => console.log(err))
    }, [])

    const onAddProductButtonClick = (e) => {
        e.preventDefault();
        contextSetDisplayModal(true);
    }


    return (
        <section className="purchases">
            <section className="filter-section">
                <span className="buttons-wrapper">
                    <Button
                        className="add-button"
                        variant="contained"
                        startIcon={<AddIcon className="add-icon" />}
                        onClick={onAddProductButtonClick}
                    >
                        Add
                    </Button>
                    <Button
                        className="filter-button"
                        variant="contained"
                        startIcon={<FilterListIcon className="add-icon" />}
                    >
                        Filter
                    </Button>
                </span>
                <span className="search-field">
                    <SearchBarWithIcon placeholder="search to buy..." />

                </span>
            </section>
            <section className="purchase-items">
                {purchases && purchases.map(purchase =>
                    <PurchaseCard
                        key={purchase._id}

                    />
                )}
            </section>

            {contextDisplayModal &&
                <ModalBackdrop >
                    <AddPurchaseAndProductForm />
                </ModalBackdrop>
            }

        </section>
    )

}


export default Purchases;