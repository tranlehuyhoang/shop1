import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box position={'fixed'} bottom={0} right={0} sx={{
            padding: '20px',
           
            width: {
                md: '100%', lg: '100%', sm: '100%', xs: '100%'
            },
        }} bgcolor={'black'} display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h6" gutterBottom gap={1} color={'white'} ml={5} sx={{ fontSize: '13px' }}>
                Chính sách bảo mật Điều khoản sử dụng
            </Typography>
            <Typography variant="h6" gutterBottom gap={1} color={'white'} sx={{ fontSize: '13px' }}>
                Version <span style={{ color: 'red' }}>5.1.9</span> | Powered By <span style={{ color: '#3378ff' }}>TLHH</span>

            </Typography>
        </Box>
    )
}

export default Footer