import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import '../App.css'
const Dangnhap = () => {
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <div className='dangnhap'

        >
            <Box width={'330px'} borderRadius={3} bgcolor={"#181818"} color={'white'}
                sx={{
                    margin: 'auto auto',
                    textAlign: 'center',
                    padding: '30px 20px'
                }}
            >
                <img src="https://clonesnew.com/assets/storage/images/logo_dark_H7W.png" alt="" />
                <Typography fontSize={30} mt={3} sx={{

                }}>
                    ĐĂNG NHẬP
                </Typography>
                <div class="form__group field" style={{
                    margin:'35px 0'
                }}>
                    <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                    <label for="name" class="form__label">UserName</label>
                </div>
                <div class="form__group field">
                    <input type="password" class="form__field" placeholder="Name" name="name" id='name' required />
                    <label for="name" class="form__label">Password</label>
                </div>
                <Link to={'/'}>
                <Button sx={{
                    marginTop: '30px',
                    width: '100%'
                }} variant="contained">Đăng nhập</Button>
                </Link>
                <Typography fontSize={15} mt={3} sx={{

                }}>
                    Bạn không có tài khoản? <Link style={{ color: '#3378ff' }}>Đăng kí</Link>
                </Typography>

            </Box>
        </div>
    )
}

export default Dangnhap