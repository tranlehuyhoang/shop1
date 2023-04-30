import React, { useEffect, useState } from 'react'
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
import store from '../redux/Store';
import MailIcon from '@mui/icons-material/Mail'
import Nav2 from './Nav2';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import axios from 'axios';
import { getUserById } from '../firebase/database'
import { useDispatch, useSelector } from 'react-redux';
import { setBalance, setName } from '../redux/Reducer';
const Head = ({ menu, setmenu }) => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.name);
    const balance = useSelector(state => state.balance);
    const user = localStorage.getItem("name")
    const { location } = window;
    const hehehhe = () => {

    }


    const handlelogout = () => {
        localStorage.removeItem("name");
        location.reload();
    }
    const [state, setstate] = useState();

    useEffect(() => {
        console.log(name || user)
        getUserById(name || user)
            .then((user) => {
                // Set the user object directly to the state variable
                setstate(user.userId);
                // Save name and balance to the Redux store
                dispatch(setName(user.userId));
                dispatch(setBalance(user.balance));
            })
            .catch((error) => {
                console.error(error);
            });
        setstate(localStorage.getItem("name") || '')
    }, []);
    const [logout, setlogout] = useState(false);

    const [meenu, setmennnuchill] = useState(false);
    const datass = { id: 'user', name: state };
    const showmenu = () => {
        setlogout(true)
    }
    return (
        <>
            <Menu
                onClick={e => { setmennnuchill(false) }}
                id="basic-menu"
                open={meenu}
                sx={{
                    top: '50px',

                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem onClick={handlelogout} >Logout</MenuItem>
            </Menu >
            <AppBar position='sticky' sx={{
                width: '100%',
                backgroundColor: '#181818',


            }}>

                <Toolbar
                    onClick={e => { setlogout(false) }}
                    sx={{
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
                        <Button
                            onClick={hehehhe}
                            variant="outlined" sx={{
                                color: '#3378ff'
                            }}>
                            <AddCardIcon sx={{
                                color: 'white',
                                padding: '0 10px'
                            }} /> Ví : <span>{balance || 0} đ</span>
                        </Button>
                    </Box>
                    <Box display={'flex'} gap={2} alignItems={'center'}
                        onClick={e => { setmennnuchill(true) }}
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
                        {state ?
                            <Box
                            >
                                <Typography
                                    onClick={showmenu}
                                    sx={{
                                        fontSize: '15px'
                                    }} gutterBottom>
                                    {state}
                                </Typography>

                            </Box>
                            :
                            <Link style={{
                                textDecoration: 'none',
                                color: 'white'
                            }} to={'/dang-nhap'}>
                                <Button sx={{
                                    color: 'white'
                                }} variant="text">
                                    Bạn chưa đăng nhập
                                </Button>
                            </Link>
                        }

                    </Box>
                    <Box borderRadius={2} display={'flex'} gap={2} onClick={e => { meenu == 'none' ? setmennnuchill('flex') : setmennnuchill('none') }} alignItems={'center'}
                        sx={{

                            display: {
                                md: 'flex', lg: 'none', sm: 'flex', xs: 'flex'
                            },


                        }}

                    >
                        <Button sx={{
                            color: 'white'
                        }} variant="text">

                            <DragHandleSharpIcon sx={{
                                bgcolor: 'gray',
                                borderRadius: '5px'

                            }} />
                        </Button>
                    </Box>

                </Toolbar>
                <Box display={'flex'} gap={2} ml={3} alignItems={'center'}
                    sx={{
                        display: {
                            md: !meenu ? 'flex' : 'none', lg: 'none', sm: !meenu ? 'flex' : 'none', xs: !meenu ? 'flex' : 'none', xl: 'none'

                        }


                    }}
                >
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon sx={{
                            color: 'white'
                        }} />
                    </Badge>
                    <Avatar src="../images/1.jpg" />
                    {state ?
                        <Typography sx={{
                            fontSize: '15px'
                        }} gutterBottom>
                            {state}
                        </Typography>
                        :
                        <Link style={{
                            textDecoration: 'none',
                            color: 'white'
                        }} to={'/dang-nhap'}>
                            <Button sx={{
                                color: 'white'
                            }} variant="text">
                                Bạn chưa đăng nhập
                            </Button>
                        </Link>
                    }

                </Box>
            </AppBar>

        </>
    )
}

export default Head
