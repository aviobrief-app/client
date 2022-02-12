
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';

import SearchBarWithIcon from 'components/shared/SearchBarWithIcon/SearchBarWithIcon';

import './Purchases.scss';
const Purchases = () => {




    return (
        <section className="purchases">
            <section className="filter-section">
                <span className="buttons-wrapper">
                    <Button
                        className="add-button"
                        variant="contained"
                        startIcon={<AddIcon className="add-icon" />}
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

        </section>
    )

}


export default Purchases;