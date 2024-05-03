import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RoleFilter } from './RoleFilter';
import ExperienceFilter from './ExperienceFilter';
import BasePayFilter from './BasePayFilter';
import LocationFilter from './LocationFilter';
import WorkingModelFilter from './WorkingModeFilter';

const Filterbar = () => {
    return (
        <Box display='flex' flexDirection='row' alignItems='center' flexWrap='wrap' gap={2} m='0.5rem'>
            <RoleFilter />
            <ExperienceFilter />
            <BasePayFilter />
            <LocationFilter />
            <WorkingModelFilter />
        </Box >
    )
}

export default Filterbar