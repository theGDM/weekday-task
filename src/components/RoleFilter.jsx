import { Box, Chip, FormControl, InputBase, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { createStyles, makeStyles, styled, useTheme } from '@mui/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useDispatch } from "react-redux";
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

export const RoleFilter = () => {
    const classes = useStyles();
    let dispatch = useDispatch();
    let [selected, setSelected] = useState(false);

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
            padding: '0.9rem 0.8rem 0.25rem 0.8rem',
            "&:hover": {
                borderRadius: '0.4rem',
                borderColor: 'rgb(180, 180, 180)',
            },
            '&:focus': {
                borderRadius: '0.5rem',
                border: `0.2rem solid #2196f3`,

            }
        },
    }));

    const theme = useTheme();
    const [role, setRole] = useState([]);

    const handleChange = (e) => {
        setRole(e.target.value);
        setSelected(true);
        dispatch(SetRole(e.target.value));
    };

    const handleDelete = () => {
        setRole('');
        setSelected(false);
        dispatch(SetRole(''));
    }

    return (
        <FormControl sx={{ width: 'auto', minWidth: '15rem' }} size='medium'>
            {role != '' ? <Typography
                sx={{ fontSize: '1.3rem' }}
            >
                Roles
            </Typography> :
                <Box
                    sx={{ height: '1.6rem' }}
                >
                </Box>}
            <Select
                labelId="select-role"
                id="single-select-role"
                select
                value={role}
                displayEmpty
                onChange={handleChange}
                input={< BootstrapInput />}
                renderValue={() => {
                    if (!selected) {
                        return (
                            <span style={{ fontSize: '1.4rem', color: '#999', fontWeight: '300' }}>
                                Role
                            </span>
                        );
                    }
                    return <Chip
                        sx={{
                            borderRadius: '0.3rem',
                            padding: '0',
                            fontSize: '1.2rem',
                            fontWeight: '300',
                            height: '2rem',
                            mb: '0.6rem'
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
                        onDelete={handleDelete}
                        onClick={() => setRole('')}
                        key={role}
                        label={role}
                    />
                }}
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
        </FormControl >
    )
}
