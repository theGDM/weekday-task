import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import JobCard from '../../components/JobCard'
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsData } from '../../actions/JobsDataAction';

const Dashboard = () => {
    let dispatch = useDispatch();
    let jobData = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobsData(20, 0));
    }, []);

    return (
        <Box display='flex' flexDirection='column' p='2rem'>
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
                    }) : <></>
                }

            </Box>
            <JobCard />
        </Box>
    )
}

export default Dashboard