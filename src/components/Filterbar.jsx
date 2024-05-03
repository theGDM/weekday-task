import { Box, Chip, FormControl, InputBase, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react'
import { createStyles, makeStyles, styled, useTheme } from '@mui/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useDispatch, useSelector } from "react-redux";
import { SetRole } from '../actions/FilterAction';
import { DesignRoles, EngineeringRoles, ProductRoles } from '../data/FilterOptionsList';

const useStyles = makeStyles((theme) =>
    createStyles({
        redBackground: {
            backgroundColor: "#C00",
            padding: 10
        },
        whiteBackground: {
            backgroundColor: "#FFF"
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            maxWidth: 300
        },
        chips: {
            display: "flex",
            flexWrap: "wrap"
        },
        chip: {
            backgroundColor: "#FFF",
            padding: '0.2rem 0.2rem'
        },
        noLabel: {
            marginTop: theme.spacing(3)
        }
    })
);

const Filterbar = () => {
    const classes = useStyles();
    let dispatch = useDispatch();

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: '30rem',
                width: '10rem',
            },
        },
    };

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: '#fff',
            border: `0.15rem solid rgb(204, 204, 204)`,
            borderRadius: '0.4rem',
            fontSize: '13px',
            height: '15rem',
            padding: '0.8rem 0.8rem 0.8px 0.8rem',
            "&:hover": {
                borderRadius: '0.4rem',
                borderColor: 'rgb(190, 190, 190)',
            },
            '&:focus': {
                borderRadius: '0.5rem',
                borderColor: '#2196f3',
                border: `0.2rem solid #2196f3`,

            }
        },
    }));

    const theme = useTheme();
    const [role, setRole] = useState([]);

    const handleChange = (e) => {
        setRole(e.target.value);
        dispatch(SetRole(e.target.value));
    };

    return (

        <Box display='flex' flexDirection='row' alignItems='center' flexWrap='wrap'>
            <FormControl sx={{ m: 1, width: '20rem' }} size='medium'>
                <InputLabel id="select-role"
                    sx={{
                        fontSize: '1.5rem',
                        color: '#000',
                        fontWeight: '400'
                    }}

                >
                    Roles
                </InputLabel>
                <Select
                    labelId="select-role"
                    id="single-select-role"
                    select
                    value={role}
                    onChange={handleChange}
                    input={< BootstrapInput />}
                    renderValue={(selected) => (
                        <Chip
                            sx={{
                                borderRadius: '0.4rem',
                                padding: '0',
                                fontSize: '1.2rem',
                                fontWeight: '300'
                            }}
                            className={classes.chip}
                            clickable
                            deleteIcon={
                                <ClearRoundedIcon
                                    color='#000'
                                    fontSize='0.5rem'
                                    onMouseDown={(event) => event.stopPropagation()}
                                />
                            }
                            onDelete={() => console.log('delteed')}
                            onClick={() => setRole('')}
                            key={role}
                            label={role}
                        />
                    )}
                    MenuProps={MenuProps}
                >
                    <MenuItem
                        sx={{
                            fontSize: '1.4rem', fontWeight: '400', backgroundColor: '#fff'
                        }}
                        disabled
                        value=""
                    >
                        ENGINEERING
                    </MenuItem>
                    {EngineeringRoles.map((erole) => (
                        <MenuItem
                            key={erole}
                            value={erole}
                            sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                        >
                            {erole}
                        </MenuItem>
                    ))}
                    <MenuItem
                        sx={{
                            fontSize: '1.4rem', fontWeight: '400', backgroundColor: '#fff'
                        }}
                        disabled
                        value=""
                    >
                        DESIGN
                    </MenuItem>
                    {DesignRoles.map((drole) => (
                        <MenuItem
                            key={drole}
                            value={drole}
                            sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                        >
                            {drole}
                        </MenuItem>
                    ))}
                    <MenuItem
                        sx={{
                            fontSize: '1.4rem', fontWeight: '400', backgroundColor: '#fff'
                        }}
                        disabled
                        value=""
                    >
                        PRODUCT
                    </MenuItem>
                    {ProductRoles.map((prole) => (
                        <MenuItem
                            key={prole}
                            value={prole}
                            sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                        >
                            {prole}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: '20rem' }} size='medium'>
                <InputLabel id="select-role"
                    sx={{
                        fontSize: '1.5rem',
                        color: '#000',
                        fontWeight: '400'
                    }}

                >
                    Roles
                </InputLabel>
                <Select
                    labelId="select-role"
                    id="single-select-role"
                    select
                    value={role}
                    onChange={handleChange}
                    input={< BootstrapInput />}
                    renderValue={(selected) => (
                        <Chip
                            sx={{
                                borderRadius: '0.4rem',
                                padding: '0',
                                fontSize: '1.2rem',
                                fontWeight: '300'
                            }}
                            className={classes.chip}
                            clickable
                            deleteIcon={
                                <ClearRoundedIcon
                                    color='#000'
                                    fontSize='0.5rem'
                                    onMouseDown={(event) => event.stopPropagation()}
                                />
                            }
                            onDelete={() => console.log('delteed')}
                            onClick={() => setRole('')}
                            key={role}
                            label={role}
                        />
                    )}
                    MenuProps={MenuProps}
                >
                    <MenuItem
                        sx={{
                            fontSize: '1.4rem', fontWeight: '400', backgroundColor: '#fff'
                        }}
                        disabled
                        value=""
                    >
                        ENGINEERING
                    </MenuItem>
                    {EngineeringRoles.map((erole) => (
                        <MenuItem
                            key={erole}
                            value={erole}
                            sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                        >
                            {erole}
                        </MenuItem>
                    ))}
                    <MenuItem
                        sx={{
                            fontSize: '1.4rem', fontWeight: '400', backgroundColor: '#fff'
                        }}
                        disabled
                        value=""
                    >
                        DESIGN
                    </MenuItem>
                    {DesignRoles.map((drole) => (
                        <MenuItem
                            key={drole}
                            value={drole}
                            sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                        >
                            {drole}
                        </MenuItem>
                    ))}
                    <MenuItem
                        sx={{
                            fontSize: '1.4rem', fontWeight: '400', backgroundColor: '#fff'
                        }}
                        disabled
                        value=""
                    >
                        PRODUCT
                    </MenuItem>
                    {ProductRoles.map((prole) => (
                        <MenuItem
                            key={prole}
                            value={prole}
                            sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                        >
                            {prole}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default Filterbar