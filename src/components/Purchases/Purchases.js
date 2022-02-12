
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import './Purchases.scss';
const Purchases = () => {




    return (
        <section className="purchases">
            <Button
                className="add-button"
                variant="contained"
                startIcon={<AddIcon className="add-icon" />}
            >
                Add
            </Button>

        </section>
    )

}


export default Purchases;