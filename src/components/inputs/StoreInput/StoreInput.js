import { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";


import './StoreInput.scss';
const StoreInput = () => {

    const [inputValue, setInputValue] = useState('');

    return (
        <section className="product-store-input">
            <Autocomplete
                options={options}
                noOptionsText="Enter to create a new option"
                getOptionLabel={(option) => option.title}
                onInputChange={(e, newValue) => {
                    setInputValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Select"
                        variant="outlined"
                        onKeyDown={(e) => {
                            if(
                                e.key === "Enter" &&
                                options.findIndex((o) => o.title === inputValue) === -1
                            ) {
                                setOptions((o) => o.concat({ title: inputValue }));
                            }
                        }}
                    />
                )}
            />

        </section>
    )
}

export default StoreInput;