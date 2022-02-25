import { useState } from 'react';
import { Button } from '@mui/material';

import FilterListIcon from '@mui/icons-material/FilterList';
import FilterDialog from 'components/pages/Purchases/FilterDialog/FilterDialog';

import './FilterButton.scss';
const FilterButton = () => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);



    return (
        <section className="filter-button">
            <Button
                className="button"
                variant="contained"
                startIcon={<FilterListIcon className="add-icon" />}
                onClick={() => setOpen(true)}
            >
                Filter
            </Button>
            <FilterDialog
                open={open}
                onClose={handleClose}
            />
        </section>
    )
}

export default FilterButton;