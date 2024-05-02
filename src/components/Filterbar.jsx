import { Box, Chip, FormControl, InputBase, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react'
import { createStyles, makeStyles, styled, useTheme } from '@mui/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';


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
            margin: 2,
            backgroundColor: "#FFF"
        },
        noLabel: {
            marginTop: theme.spacing(3)
        }
    })
);

const Filterbar = () => {
    const classes = useStyles();
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 38 * 4.5 + ITEM_PADDING_TOP,
                width: '10rem',
            },
        },
    };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: '#fff',
            border: `0.15rem solid rgb(204, 204, 204)`,
            borderRadius: '0.4rem',
            fontSize: '13px',
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
    };

    return (

        <Box display='flex' flexDirection='row' alignItems='center' flexWrap='wrap'>
            <FormControl sx={{ m: 1, width: 300 }}>
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
                    sx={{
                        height: '4rem',
                        width: '15rem',
                        transition: 'all 100ms ease 0s'
                    }}
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
                        sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                        disabled value="">
                        ENGINEERING
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default Filterbar