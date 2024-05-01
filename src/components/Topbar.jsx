import React from 'react'
import { Box } from '@mui/material'

const Topbar = () => {
    return (
        <Box display="flex"
            justifyContent="space-between"
            alignItems="center"
            p='0.8rem'
            height='10vh'
            sx={{
                borderRadius: '1rem',
                backgroundColor: '#fff',
                boxShadow: '0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2)'
            }}
        >
            <Box
                component='img'
                alt='Workday-Logo'
                height='4rem'
                src='https://jobs.weekday.works/_next/static/media/logo.268caeb2.png'
            />
        </Box>
    )
}

export default Topbar;