import { Box, Chip, FormControl, InputBase, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { createStyles, makeStyles, styled } from '@mui/styles';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useDispatch, useSelector } from "react-redux";
import { SetExperience } from '../actions/FilterAction';
import { ExperienceList } from '../data/FilterOptionsList';

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

const ExperienceFilter = () => {
    const classes = useStyles();
    let dispatch = useDispatch();
    const [experience, setExperience] = useState([]);
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
            padding: '0.8rem 0.8rem 0.2rem 0.8rem',
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

    const handleChange = (e) => {
        setExperience(e.target.value);
        setSelected(true);
        dispatch(SetExperience(e.target.value));
    };

    const handleDelete = () => {
        setExperience('');
        setSelected(false);
        dispatch(SetExperience(''));
    }

    return (
        <FormControl sx={{ width: 'auto', minWidth: '15rem' }} size='medium'>
            {experience != '' ? <Typography
                sx={{ fontSize: '1.3rem' }}
            >
                Experience
            </Typography> :
                <Box
                    sx={{ height: '1.6rem' }}
                >

                </Box>}
            <Select
                labelId="select-role"
                id="single-select-role"
                select
                value={experience}
                onChange={handleChange}
                input={< BootstrapInput />}
                displayEmpty
                renderValue={() => {
                    if (!selected) {
                        return (
                            <span style={{ fontSize: '1.4rem', color: '#999', fontWeight: '300' }}>
                                Experience
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
                        onClick={() => setExperience('')}
                        key={experience}
                        label={experience}
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
                    EXPERIENCE
                </MenuItem>
                {ExperienceList.map((erole) => (
                    <MenuItem
                        key={erole}
                        value={erole}
                        sx={{ fontSize: '1.4rem', fontWeight: '300' }}
                    >
                        {erole}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default ExperienceFilter