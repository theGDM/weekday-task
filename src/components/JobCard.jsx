import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShowMoreDialog from './ShowMoreDialog';

const JobCard = ({ jobsDetails }) => {
    //creating states for checking if the model is open or not
    const [isOpen, setOpenModal] = useState(false);
    const openInfoModal = () => setOpenModal(true);
    const closeInfoModal = () => setOpenModal(false);

    console.log('Hiii', jobsDetails);
    if (jobsDetails == undefined) return <></>;
    return (
        <Box
            display='flex'
            height='100%'
            flexDirection='column'
            justifyContent='space-between'
            maxWidth='36rem'
            alignItems='start'
            p='0.8rem'
            m='0.5rem 1.2rem 1.2rem 1.2rem'
            boxShadow='rgba(0, 0, 0, 0.25) 0px 1px 4px 0px !important'
            borderRadius='2rem'
        >
            <Box
                display='flex'
                p='0.5rem 0'
                alignItems='flex-start'
            >
                <Box
                    m='0.5rem 1rem'
                    p='0.4rem 0.6rem'
                    border='1px solid rgb(230, 230, 230)'
                    borderRadius='1rem'
                    boxShadow='rgba(6, 6, 6, 0.05) 0px 2px 6px 0px'
                >
                    <Typography>
                        ⏳ Posted 20 hours ago
                    </Typography>
                </Box>
            </Box>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='start'
                p='0.5rem 1rem'
            >
                <Box
                    component='img'
                    alt='Workday-Logo'
                    height='4rem'
                    src='https://cdn5.vectorstock.com/i/1000x1000/22/39/construction-company-logo-samples-vector-2222239.jpg'
                />
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='start'
                    pl='1rem'
                >
                    <Typography
                        color='#8b8b8b'
                        fontSize='1.3rem'
                        fontWeight='600'
                        letterSpacing='0.1rem'
                        marginBottom='0.3rem'
                    >
                        Futuristic Labs
                    </Typography>
                    <Typography
                        fontSize='1.4rem'
                        lineHeight='1.5'
                        fontWeight='300'
                    >
                        Lead Software Engineer
                    </Typography>
                    <Typography
                        fontSize='1.1rem'
                        fontWeight='500'
                        mt='0.5rem'
                        textTransform='capitalize'
                    >
                        {jobsDetails?.location}
                    </Typography>

                </Box>
            </Box>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='start'
                p='0.5rem 1rem'
            >
                <Typography
                    fontSize='1.4rem'
                    fontWeight='300'
                    color='rgb(77, 89, 106)'
                >
                    {`Estimated Salary: ${jobsDetails?.salaryCurrencyCode} ${jobsDetails.minJdSalary != null ? jobsDetails?.minJdSalary : jobsDetails?.maxJdSalary - 10} - ${jobsDetails?.maxJdSalary} ⚠️`}
                </Typography>
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='start'
                p='0.5rem 1rem'
                height='25rem'
                maxWidth='100%'
                sx={{
                    backgroundImage: 'linear-gradient(to bottom, rgb(77, 89, 106) 0%, rgb(77, 89, 106) 65%,  transparent 100%);',
                    backgroundClip: 'text'
                }}
            >
                <Typography
                    fontWeight='400'
                    lineHeight='1.5'
                    fontSize='1.6rem'
                >
                    About Company:
                </Typography>
                <Typography
                    fontSize='1.4rem'
                    color='rgb(77, 89, 106)'
                    fontWeight='300'
                >
                    Futuristic Labs is an Innovation Studio that is focused on enriching the quality of life by harnessing the power of technology to create products that transform mundane activities into delightful experiences.
                </Typography>
                <Typography
                    fontWeight='400'
                    lineHeight='1.5'
                    fontSize='1.6rem'
                    mt='1rem'
                >
                    About Role:
                </Typography>
                <Typography
                    fontSize='1.4rem'
                    color='transparent'
                    fontWeight='300'
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {jobsDetails?.jobDetailsFromCompany}
                </Typography>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection='row'
                justifyContent='center'
            >
                <Typography
                    fontSize='1.4rem'
                    color='#4943da'
                    onClick={openInfoModal}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    Show more
                </Typography>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='start'
                p='0.5rem 1rem'
                mt='1rem'
            >
                <Typography
                    fontSize='1.3rem'
                    fontWeight='500'
                    color='#8b8b8b'
                    mb='0.3rem'
                    letterSpacing='0.1rem'
                >
                    Skills
                </Typography>
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Box
                        fontSize='0.9rem'
                        fontWeight='500'
                        color='#4943da'
                        padding='0.2rem 0.7rem'
                        borderRadius='5rem'
                        bgcolor='#d9fed3'
                        mr='0.4rem'
                        textTransform='capitalize'
                    >
                        {jobsDetails?.jobRole}
                    </Box>
                </Box>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='start'
                p='0.5rem 1rem'
                mt='1rem'
            >
                <Typography
                    fontSize='1.3rem'
                    fontWeight='500'
                    color='#8b8b8b'
                    mb='0.3rem'
                    letterSpacing='0.1rem'
                >
                    Minimum Experience
                </Typography>
                <Typography
                    fontSize='1.3rem'
                    fontWeight='500'
                    letterSpacing='0.1rem'
                >
                    {(jobsDetails.minExp == null) ? 'Fresher' : `${jobsDetails.minExp} years`}
                </Typography>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='start'
                p='0 1rem'
                mt='1rem'
            >
                <Button
                    sx={{
                        backgroundColor: 'rgb(85, 239, 196)',
                        color: '#000',
                        p: '0.8rem 1.8rem',
                        borderRadius: '0.8rem',
                        fontWeight: '500',
                        fontSize: '1.5rem',
                        textTransform: 'none',
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "rgb(85, 239, 196)"
                        }
                    }}
                    target="_blank"
                    href={jobsDetails?.jdLink}
                >
                    ⚡ Easy Apply
                </Button>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='start'
                p='0 1rem 0.5rem 1rem'
                mt='1rem'
            >
                <Button
                    sx={{
                        backgroundColor: 'rgb(73, 67, 218)',
                        color: '#000',
                        p: '0.8rem 1.8rem',
                        borderRadius: '0.8rem',
                        fontWeight: '500',
                        fontSize: '1.5rem',
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "rgb(73, 67, 218)"
                        }
                    }}

                >
                    <Box
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                    >

                    </Box>
                    <Avatar alt="Remy Sharp" src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group.png" sx={{ width: ' 2.5rem', height: '2.5rem', objectFit: 'cover', color: 'transparent' }} />
                    <Avatar alt="Remy Sharp" src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group(1).png" sx={{ width: ' 2.5rem', height: '2.5rem', objectFit: 'cover', color: 'transparent' }} />
                    <Typography
                        fontWeight='400'
                        lineHeight='1.5'
                        color='rgb(255, 255, 255)'
                        fontSize='1.4rem'
                        textTransform='none'
                        ml='0.5rem'
                    >
                        Unlock referral asks
                    </Typography>
                </Button>
            </Box>
            {isOpen && <ShowMoreDialog isOpen={openInfoModal} onClose={closeInfoModal} jobDetails={jobsDetails} />}
        </Box >
    )
}

export default JobCard