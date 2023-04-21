import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
import Button from '@mui/material/Button';
import AddCardIcon from '@mui/icons-material/AddCard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { addData, getData } from '../redux/Action';
import store from '../redux/Store';
import MailIcon from '@mui/icons-material/Mail'
import Nav2 from './Nav2';

const Head = ({ menu, setmenu }) => {
    const [state, setstate] = useState('2508roblox');
    const datass = { id: 'user', name: state };
    store.dispatch(addData(datass));
    return (

        <AppBar position='sticky' sx={{
            width: '100%',
            backgroundColor: '#181818',


        }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box gap={2} alignItems={'center'} display={'flex'}>
                    <MenuIcon onClick={e => { setmenu('block') }}
                        sx={{
                            display: {
                                md: 'block', lg: 'none', sm: 'block', xs: 'block'
                            }
                        }}
                    />
                    <MenuIcon
                        sx={{
                            display: {
                                md: 'none', lg: 'block', sm: 'none', xs: 'none'
                            }
                        }}
                    />
                    <Button variant="outlined" sx={{
                        color: '#3378ff'
                    }}>
                        <AddCardIcon sx={{
                            color: 'white',
                            padding: '0 10px'
                        }} /> Ví : <span>0 đ</span>
                    </Button>
                </Box>
                <Box display={'flex'} gap={2} alignItems={'center'}
                    sx={{

                        display: {
                            md: 'none', lg: 'flex', sm: 'none', xs: 'none'
                        },


                    }}
                >
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon sx={{
                            color: 'white'
                        }} />
                    </Badge>
                    <Avatar src="../images/1.jpg" />
                    <Typography sx={{
                        fontSize: '15px'
                    }} gutterBottom>
                        {state}
                    </Typography>

                </Box>
                <Box borderRadius={2} display={'flex'} gap={2} alignItems={'center'}
                    sx={{

                        display: {
                            md: 'flex', lg: 'none', sm: 'flex', xs: 'flex'
                        },


                    }}

                >
                    <DragHandleSharpIcon sx={{
                        bgcolor: 'gray',
                        borderRadius: '5px'

                    }} />
                </Box>

            </Toolbar>

        </AppBar>

    )
}

export default Head
