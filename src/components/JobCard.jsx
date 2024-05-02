import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'

const JobCard = () => {
    return (
        <Box
            display='flex'
            height='100%'
            flexDirection='column'
            justifyContent='space-between'
            maxWidth='36rem'
            alignItems='start'
            p='0.8rem'
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
                    >
                        Lead Software Engineer
                    </Typography>
                    <Typography
                        fontSize='1.1rem'
                        fontWeight='500'
                        mt='0.5rem'
                    >
                        Hyderabad
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
                    fontWeight='400'
                    color='rgb(77, 89, 106)'
                >
                    Estimated Salary: &#8377;20 - 30 LPA ⚠️
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
                    backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%,  #F6F6F6 100%);',
                    backgroundClip: 'text'
                }}
            >
                <Typography
                    fontWeight='500'
                    lineHeight='1.5'
                    fontSize='1.5rem'
                >
                    About Company:
                </Typography>
                <Typography
                    fontSize='1.4rem'
                    color='rgb(77, 89, 106)'
                >
                    Futuristic Labs is an Innovation Studio that is focused on enriching the quality of life by harnessing the power of technology to create products that transform mundane activities into delightful experiences.
                </Typography>
                <Typography
                    fontWeight='500'
                    lineHeight='1.5'
                    fontSize='1.5rem'
                    mt='1rem'
                >
                    About Role:
                </Typography>
                <Typography
                    fontSize='1.4rem'
                    color='rgb(77, 89, 106)'
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    Location: Hyderabad, India (Work From Office)Company Overview:Are you ready to be a part of a company that doesn't just dream about the future but actively builds it? Welcome to Futuristic Labs, an Innovation Studio located in Hyderabad, India, where ambitious ideas become tangible solutions that transform lives and make a positive impact on the world.
                    At Futuristic Labs, we are on a mission to free up human potential by automating everyday tasks, liberating individuals from daily obligations, and driving a positive impact on society. We believe that the best way to predict the future is to build it, and we're doing just that. Our passionate team is revolutionizing cooking with Riku and Semi to empowering food influencers with Klynk Recipes, we're building a future where technology serves humanity.
                    Join us as we dream, build, and repeat, pushing the boundaries of what's possible and shaping a better future for all. If you are a passionate, innovative, and forward-thinking individual who wants to make a significant impact on the world, we invite you to #BuildWithUs. Together, we'll turn visions of a better world into tangible solutions that make a real difference.
                    Websites:https://www.futuristiclabs.iohttp://getriku.comhttp://cookwithsemi.comhttps://www.klynk.apphttps://klynk.recipes
                    Job Description:Position Overview:We're seeking a visionary Software Team Lead. This role isn't just about managing a team; it's about laying the foundation, setting the standards, and driving the technological direction of the company in alignment with our mission to "Connect the dots in the entire cooking journey."
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
                    fontWeight='600'
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
                    >
                        NodeJS
                    </Box>
                    <Box
                        fontSize='0.9rem'
                        fontWeight='500'
                        color='#4943da'
                        padding='0.2rem 0.7rem'
                        borderRadius='5rem'
                        bgcolor='#d9fed3'
                        mr='0.4rem'
                    >
                        NodeJS
                    </Box>
                    <Box
                        fontSize='0.9rem'
                        fontWeight='500'
                        color='#4943da'
                        padding='0.2rem 0.7rem'
                        borderRadius='5rem'
                        bgcolor='#d9fed3'
                        mr='0.4rem'
                    >
                        NodeJS
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
                    fontWeight='600'
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
                    1 years
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
                        textTransform: 'none'
                    }}
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
                        fontSize: '1.5rem'
                    }}
                    style={{
                        '&:hover': {
                            backgroundColor: 'rgb(73, 67, 218)',
                            boxShadow: 'none',
                        },
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

        </Box >
    )
}

export default JobCard