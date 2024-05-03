import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import JobCard from '../../components/JobCard'
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsData } from '../../actions/JobsDataAction';
import Filterbar from '../../components/Filterbar';

const Dashboard = () => {
    let dispatch = useDispatch();
    let jobData = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobsData(30, 0));
    }, []);

    return (
        <Box display='flex' flexDirection='column' p='2rem'>
            <Filterbar />
            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                flexWrap='wrap'
            >
                {
                    jobData.jobs.length != 0 ? jobData.jobs.map((job, index) => {
                        if (job == undefined) return <></>
                        return <JobCard key={index} jobsDetails={job} />
                    }) :
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            width='100%'
                        >
                            <Box
                                component='img'
                                alt='Workday-Logo'
                                height='25rem'
                                src='https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png'
                            >

                            </Box>
                            <Typography
                                margin='2rem 0'
                                lineHeight='1.5'
                                fontWeight='700'
                                fontSize='1.8rem'
                            >
                                No Jobs available for this category at the moment
                            </Typography>
                        </Box>
                }

            </Box>
            <JobCard />
        </Box>
    )
}

export default Dashboard