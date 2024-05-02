import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import JobCard from '../../components/JobCard'
import { GetJObsDetails } from '../../services/api';

const Dashboard = () => {
    useEffect(() => {
        GetJObsDetails();
    }, []);
    return (
        <Box display='flex' flexDirection='column' p='2rem'>
            <JobCard />
        </Box>
    )
}

export default Dashboard