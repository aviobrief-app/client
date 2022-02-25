import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


import './SearchBarWithIcon.scss';


const SearchBarWithIcon = ({
    placeholder,
    onSearchChange,
}) => {

    return (
        <Paper
            component="form"
            className="search-bar-with-icon"
        >

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                className="input-base"
                placeholder={placeholder}
                inputProps={{ 'aria-label': placeholder }}
                onChange={(e) => onSearchChange(e)}
            />
            <IconButton type="submit" aria-label="search" className="input-icon">
                <SearchIcon />
            </IconButton>

        </Paper>
    );

}


export default SearchBarWithIcon;