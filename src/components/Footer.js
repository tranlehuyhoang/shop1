import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box position={'absolute'} bottom={0} sx={{

            width: {
                md: '97%', lg: 'calc(100% - 360px)', sm: '97%', xs: '97%'
            },
        }} bgcolor={'black'} p={2} display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h6" gutterBottom gap={1} color={'white'} sx={{ fontSize: '13px' }}>
                Chính sách bảo mật Điều khoản sử dụng
            </Typography>
            <Typography variant="h6" gutterBottom gap={1} color={'white'} sx={{ fontSize: '13px' }}>
                Version <span style={{ color: 'red' }}>5.1.9</span> | Powered By <span style={{ color: '#3378ff' }}>TLHHHH</span>

            </Typography>
        </Box>
    )
}

export default Footer