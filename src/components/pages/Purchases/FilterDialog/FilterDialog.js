
import Dialog from '@mui/material/Dialog';


import './FilterDialog.scss';
const FilterDialog = (props) => {

    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>

        </Dialog>
    );
}

export default FilterDialog;