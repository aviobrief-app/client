import { useState, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import * as storeService from 'services/storeService';

import Loading from 'components/shared/Loading/Loading';
import './FilterDialog.scss';
const FilterDialog = ({
    onClose,
    selectedValue,
    open,
}) => {

    const [stores, setStores] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        storeService
            .getAvailableStores()
            .then(res => setStores(res.map(store => ({ label: store.name }))))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if(stores) { setIsLoading(false) }
    }, [stores])


    const handleClose = () => {
        onClose(selectedValue);
    };

    console.log(stores);
    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>Filter purchases</DialogTitle>
            <DialogContent sx={{ height: 200 }}>
                <DialogContentText>
                    Choose store:
                </DialogContentText>

                {isLoading
                    ? <Loading />
                    : <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={stores}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Store" />}
                        size={"small"}
                    />
                }

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Go</Button>
            </DialogActions>
        </Dialog>
    );
}

export default FilterDialog;