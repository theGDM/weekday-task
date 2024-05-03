import { Box, FormControl, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { SetCompanyName } from '../actions/FilterAction';

const CompanyNameFilter = () => {
    let dispatch = useDispatch();
    const [companyName, setCompanyName] = useState([]);

    const handleChange = (e) => {
        setCompanyName(e.target.value);
        console.log(e.target.value);
        dispatch(SetCompanyName(e.target.value));
    };

    return (
        <FormControl sx={{ width: 'auto', minWidth: '15rem' }} size='small'>
            {companyName != '' ? <Typography
                sx={{ fontSize: '1.3rem' }}
            >
                Company Name
            </Typography> :
                <Box
                    sx={{ height: '1.6rem' }}
                >
                </Box>}
            <OutlinedInput
                aria-describedby="outlined-company-name"
                placeholder='Search Company Name'
                onChange={handleChange}
                sx={{
                    fontSize: '1.3rem',
                    fontWeight: '300',
                    '&::placeholder': { // Change placeholder color
                        color: '#999',
                    },
                    "&:active": {
                        borderRadius: '0.4rem',
                        borderColor: 'rgb(180, 180, 180)',
                    },
                    borderRadius: '0.4rem'
                }}
            />
        </FormControl>
    )
}

export default CompanyNameFilter;