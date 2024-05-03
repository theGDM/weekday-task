import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import JobCard from '../../components/JobCard'
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsData } from '../../actions/JobsDataAction';
import Filterbar from '../../components/Filterbar';

const Dashboard = () => {
    let dispatch = useDispatch();
    let jobData = useSelector((state) => state.jobs);
    let filterData = useSelector((state) => state.filters);
    let [originalJobsData, setOriginalJobsData] = useState(jobData);
    let [filteredJobsData, setFilteredJobsData] = useState(jobData);

    useEffect(() => {
        dispatch(fetchJobsData(10, 10));
    }, []);


    useEffect(() => {
        console.log(filterData.experience);
        console.log(filterData.location);
        console.log(filterData.min_base_pay);
        console.log(filterData.work_place);
        console.log(filterData.tech_stack);
        console.log(filterData.role);
        let tempData = originalJobsData;
        console.log(tempData);
        if (filterData.experience != '') {

        }

        if (filterData.location != '') {

        }

        if (filterData.min_base_pay != '') {

        }

        if (filterData.work_place != '') {

        }

        if (filterData.tech_stack != '') {

        }

        if (filterData.role != '') {

        }

    }, [filterData]);

    return (
        <Box display='flex' flexDirection='column' p='2rem'>
            <Filterbar />
            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                flexWrap='wrap'
                mt='2rem'
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