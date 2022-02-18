import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';


import './ProductPackageDropdownInput.scss';
const ProductPackageDropdownInput = ({
    productPackages,
    publishInputValue,
}) => {

    const [productPackage, setProductPackage] = useState('OTHER');

    const handleChange = (e) => {
        setProductPackage(e.target.value);
        publishInputValue('productPackage', e.target.value);
    };


    return (
        <section className="product-package-dropdown-input">
            <FormControl sx={{ m: 1, minWidth: 120 }} className="form-control" size="small">
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={productPackage}
                    onChange={handleChange}
                    autoWidth
                >
                    {productPackages.map(p =>
                        <MenuItem
                            key={p}
                            value={p}>
                            {p}
                        </MenuItem>
                    )}

                </Select>
            </FormControl>

        </section>
    )
}

export default ProductPackageDropdownInput;