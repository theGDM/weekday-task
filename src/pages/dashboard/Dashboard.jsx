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
    let [offset, setOffset] = useState(0);
    let [filteredJobsData, setFilteredJobsData] = useState([]);

    useEffect(() => {
        dispatch(fetchJobsData(10, offset));
    }, []);

    useEffect(() => {
        setOriginalJobsData(jobData);
    }, [jobData.jobs]);


    useEffect(() => {
        let tempData = originalJobsData.jobs;

        //when filter is based on experience
        if (filterData.experience != '') {
            let selectedYear = parseInt(filterData.experience);
            tempData = tempData.filter(job => {
                let minYear = job.minExp == null ? 0 : job.minExp;
                let maxYear = job.maxExp == null ? minYear : job.maxExp;
                return selectedYear >= minYear && selectedYear <= maxYear;
            });
        }

        //when filter is based on location
        if (filterData.location != '') {
            let selectedLocation = filterData.location;
            tempData = tempData.filter(job => job.location.toLowerCase() == selectedLocation.toLowerCase());
        }

        //when filter is based on base pay
        if (filterData.min_base_pay != '') {
            let selectedBasePay = parseInt(filterData.min_base_pay.split('USD')[0]);
            tempData = tempData.filter(job => {
                let maxPay = job.maxJdSalary == null ? 120 : job.maxJdSalary;
                let minPay = job.minJdSalary == null ? maxPay - 10 : job.minJdSalary;
                return selectedBasePay <= minPay;
            });
        }

        //when filter is based on role
        if (filterData.role != '') {
            let selectedRole = filterData.role;
            tempData = tempData.filter(job => job.jobRole.toLowerCase() == selectedRole.toLowerCase());
        }

        //when filter is based on work place
        if (filterData.work_place != '') {
            //in the sample data actually this attribute is not provided, so can not filter out on based of it.
        }

        //when filter is based on tech stack
        if (filterData.tech_stack != '') {
            //in the sample data actually this attribute is not provided, so can not filter out on based of it.
        }

        //when user has searched for company name
        if (filterData.company_name != '') {
            console.log(filterData.company_name);
            let searchedName = filterData.company_name;
            tempData = tempData.filter(job =>
                job.companyName.toLowerCase().startsWith(searchedName.toLowerCase())
            );
        }

        //now finally setting up the filtered data, based on the apply filter
        setFilteredJobsData(tempData);

    }, [filterData, originalJobsData]);

    // Function to check if user has scrolled to the bottom of the page
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            // Call fetchData function when user reaches near the bottom of the page
            let newOffset = offset += 10;
            dispatch(fetchJobsData(10, offset += 10));
            setOffset(newOffset);
        }
    };

    // Add scroll event listener to window
    // window.addEventListener('scroll', handleScroll);

    return (
        <Box display='flex' flexDirection='column' p='2rem'>
            <Box display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
            >
                <Box
                    borderBottom='1px solid blue'
                    width='13rem'
                >
                    <Typography
                        fontSize='1.8rem'
                        fontWeight='300'
                        textAlign='center'
                    >
                        Search Jobs
                    </Typography>
                </Box>

            </Box>
            <Filterbar />
            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                flexWrap='wrap'
                mt='2rem'
            >
                {
                    filteredJobsData.length != 0 ? filteredJobsData.map((job, index) => {
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