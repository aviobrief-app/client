
import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

import './FilterButton.scss';
const FilterButton = () => {
    return (
        <section className="filter-button">
            <Button
                className="button"
                variant="contained"
                startIcon={<FilterListIcon className="add-icon" />}
            >
                Filter
            </Button>
        </section>
    )
}

export default FilterButton;