
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';

import FilterButton from 'components/pages/Purchases/FilterButton/FilterButton';
import SearchBarWithIcon from 'components/shared/SearchBarWithIcon/SearchBarWithIcon';
import { useModalBackdropContext } from 'contexts/ModalBackdropContext';
import { usePurchaseContext } from 'contexts/PurchaseContext';

import ModalBackdrop from 'components/hoc/ModalBackdrop/ModalBackdrop';
import AddPurchaseAndProductForm from 'components/forms/AddPurchaseAndProductForm/AddPurchaseAndProductForm';
import PurchaseCard from 'components/PurchaseCard/PurchaseCard';

//temp svg
import { ReactComponent as BottomMenu } from './assets/BottomMenu.svg';


import Loading from 'components/shared/Loading/Loading';
import './Purchases.scss';
const Purchases = () => {


    const { contextDisplayModal, contextSetDisplayModal } = useModalBackdropContext();
    const { orgPurchases } = usePurchaseContext();
    const [filteredPurchases, setFilteredPurchases] = useState(orgPurchases);
    const [filterValues, setFilterValues] = useState({});

    const onSearchChange = (e) => {
        setFilteredPurchases(orgPurchases.filter(purchase => {
            const nameContainsInput = purchase.product.productName.toLowerCase().includes(e.target.value.toLowerCase());
            const storeContainsInput = purchase.store.name.toLowerCase().includes(e.target.value.toLowerCase());
            return (nameContainsInput || storeContainsInput);
        }));
    }

    useEffect(() => {

        setFilteredPurchases(orgPurchases.filter(purchase => {
            if(filterValues.store) {

                const storeFiltered = purchase.store.name === filterValues.store;
                const anySoreLabeled = purchase.store.name === 'ANY STORE';

                return (storeFiltered || anySoreLabeled);
            }

            return true;
        }))

    }, [filterValues])



    const publishFilterValues = (label, value) => {
        setFilterValues(filterValues => ({ ...filterValues, [label]: value }))
    }

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
                    <FilterButton
                        publishFilterValues={publishFilterValues}
                        selectedFilters={Object.keys(filterValues).length}
                    />
                </span>
                <span className="search-field">
                    <SearchBarWithIcon placeholder="search purchases..." onSearchChange={onSearchChange} />
                </span>
            </section>

            <section className="purchase-items-list">
                {orgPurchases
                    ? filteredPurchases
                        .map(purchase =>
                            purchase.toDisplay && <PurchaseCard
                                key={purchase._id}
                                purchase={purchase}
                                product={purchase.product}
                            />)
                    : <Loading />}
            </section>

            {contextDisplayModal &&
                <ModalBackdrop >
                    <AddPurchaseAndProductForm />
                </ModalBackdrop>
            }

            <div className="bottom-menu">
                <BottomMenu />
            </div>
        </section>
    )

}


export default Purchases;