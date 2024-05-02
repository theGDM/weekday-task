import { Box, Typography } from '@mui/material'
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
            p='0.5rem'
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
        </Box>
    )
}

export default JobCard