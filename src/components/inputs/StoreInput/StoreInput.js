import { useState, useEffect } from "react";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';


import './StoreInput.scss';
const StoreInput = ({
    stores,
    publishInputValue
}) => {
    const filter = createFilterOptions();

    const [options, setOptions] = useState(stores || []);
    const [value, setValue] = useState(null);
    const [dialogValue, setDialogValue] = useState({ label: '' });
    const [open, toggleOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({ label: dialogValue.label });

        setOptions(options => [...options, { label: dialogValue.label }])
        handleClose();
    };

    const handleClose = () => {
        setDialogValue({ label: '' });
        toggleOpen(false);
    };


    return (
        <section className="store-input">
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if(typeof newValue === 'string') {
                        // timeout to avoid instant validation of the dialog's form.
                        setTimeout(() => {
                            toggleOpen(true);
                            setDialogValue({
                                label: newValue,
                                year: '',
                            });
                        });
                    } else if(newValue && newValue.inputValue) {
                        toggleOpen(true);
                        setDialogValue({ label: newValue.inputValue });
                    } else {
                        setValue(newValue);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const isExisting = options.some((option) => params.inputValue === option.label);
                    if(params.inputValue !== '' && !isExisting) {
                        filtered.push({
                            inputValue: params.inputValue,
                            label: `Add "${params.inputValue}"`,
                        });
                    }

                    return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={options}
                getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if(typeof option === 'string') {
                        return option;
                    }
                    if(option.inputValue) {
                        return option.inputValue;
                    }
                    return option.label;
                }}

                renderOption={(props, option) => {
                    return <li {...props}>{option.label}</li>
                }}
                sx={{ width: 273 }}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Store" />
                )}
                size={"small"}
            />

            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Add a new store</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter name:
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={dialogValue.label}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    label: event.target.value,
                                })
                            }
                            label="store"
                            type="text"
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Add</Button>
                    </DialogActions>
                </form>
            </Dialog>


        </section>
    )
}

export default StoreInput;