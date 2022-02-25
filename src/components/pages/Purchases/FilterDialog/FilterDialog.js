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
    publishFilterValues,
}) => {

    const [stores, setStores] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('');
    const handleClose = () => { onClose(selectedValue) };


    useEffect(() => {
        storeService
            .getAvailableStores()
            .then(res => setStores(res.map(store => ({ label: store.name }))))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if(stores) { setIsLoading(false) }
    }, [stores])

    const onGoButtonClick = () => {
        console.log(value);
        publishFilterValues('store', inputValue);
        handleClose();
    }


    return (
        <Dialog
            onClose={handleClose}
            open={open}
            fullWidth
            maxWidth="sm"

        >
            <DialogTitle>Filter purchases</DialogTitle>
            <DialogContent sx={{ height: 220 }}>
                <DialogContentText sx={{ marginBottom: 1 }}>
                    Choose store:
                </DialogContentText>

                {isLoading
                    ? <Loading />
                    : <Autocomplete
                        renderOption={(props, option) => {
                            return (
                                <li {...props} key={option.id}>
                                    {option.label}
                                </li>
                            );
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={stores}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Store" />}
                        size={"small"}
                        ListboxProps={
                            {
                                style: {
                                    maxHeight: '150px',
                                }
                            }
                        }
                        onInputChange={(e, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        onChange={(e, newValue) => { setValue(newValue); }}

                    />
                }

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" onClick={onGoButtonClick}>Go</Button>
            </DialogActions>

        </Dialog>
    );
}

export default FilterDialog;