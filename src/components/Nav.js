import { Box, Button } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
const Nav = () => {
    const { pathname } = useLocation();

    return (
        <Box bgcolor={'#181818'} sx={{
            display: {
                md: 'none', lg: 'block', sm: 'none', xs: 'none'
            },

        }} width={400}>
            <Box position={'fixed'} sx={{

                height: '100%',
                width: '250px',


                display: {
                    md: 'none', lg: 'block', sm: 'none', xs: 'none'
                },
                padding: {
                    md: '0', lg: '20px', sm: '0', xs: '0'
                },

            }}>
                <Link to={'/'}>
                    <Button variant="text" >

                        <img src="https://clonesnew.com/assets/storage/images/logo_dark_H7W.png" alt="" />
                    </Button>
                </Link>

                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Typography variant="h6" fontSize={15} gutterBottom>
                                Select Language: Vietnamese
                            </Typography>

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Typography variant="h6" fontSize={15} gutterBottom>
                                Select Currency: VND
                            </Typography>

                        </ListItemButton>
                    </ListItem>
                </List>
                <Typography variant="h6" fontSize={15} gutterBottom>
                    SỐ DƯ <span style={{ color: 'yellow' }}>0Đ</span> -GIẢM:<span style={{ color: 'red' }}>0%</span>
                </Typography>
                <List>

                    {
                        pathname == '/' ?
                            <Link to="/" style={{
                                color: 'white',
                                textDecoration: 'none'
                            }}>
                                <ListItem disablePadding sx={{
                                    bgcolor: '#3b3d3f',
                                    borderRadius: '10px'
                                }}>
                                    <ListItemButton href='/'>
                                        <ListItemIcon >
                                            <ShoppingCartIcon sx={{
                                                color: 'white'
                                            }} />
                                        </ListItemIcon>
                                        <ListItemText primary="MUA TÀI KHOẢN" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            :
                            <Link to="/" style={{
                                color: 'white',
                                textDecoration: 'none'
                            }}>
                                <ListItem disablePadding sx={{

                                }}>

                                    <ListItemButton href='/'>
                                        <ListItemIcon >
                                            <ShoppingCartIcon sx={{
                                                color: 'white'
                                            }} />
                                        </ListItemIcon>
                                        <ListItemText primary="MUA TÀI KHOẢN" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                    }




                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <LibraryBooksIcon sx={{
                                    color: 'white'
                                }} />
                            </ListItemIcon>
                            <ListItemText primary="MUA TÀI LIỆU" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <HistoryOutlinedIcon sx={{
                                    color: 'white'
                                }} />
                            </ListItemIcon>
                            <ListItemText sx={{
                                display: 'inline-block'
                            }} primary="Lịch Sử Mua Hàng" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Typography variant="h6" fontSize={15} gutterBottom>
                    Nạp Tiền
                </Typography>
                <List>
                    {pathname == '/ngan-hang'

                        ?
                        <Link to="/ngan-hang" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <ListItem disablePadding sx={{
                                bgcolor: '#3b3d3f',
                                borderRadius: '10px'
                            }}>
                                <ListItemButton href='/ngan-hang'>
                                    <ListItemIcon >
                                        <AccountBalanceIcon sx={{
                                            color: 'white'
                                        }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Ngân Hàng" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        :
                        <Link to="/ngan-hang" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>

                            <ListItem disablePadding>
                                <ListItemButton href='/ngan-hang'>
                                    <ListItemIcon >
                                        <AccountBalanceIcon sx={{
                                            color: 'white'
                                        }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Ngân Hàng" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    }

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <ReceiptLongIcon sx={{
                                    color: 'white'
                                }} />
                            </ListItemIcon>
                            <ListItemText primary="Hóa Đơn" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Typography variant="h6" fontSize={15} gutterBottom>
                    Khác
                </Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <BrandingWatermarkIcon sx={{
                                    color: 'white'
                                }} />
                            </ListItemIcon>
                            <ListItemText primary="Bài Viết" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <LibraryBooksIcon sx={{
                                    color: 'white'
                                }} />
                            </ListItemIcon >
                            <ListItemText primary="Công Cụ" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <IntegrationInstructionsIcon sx={{
                                    color: 'white'
                                }} />
                            </ListItemIcon>
                            <ListItemText primary="Tài Liệu API" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <ContactPageIcon sx={{
                                    color: 'white'
                                }} />
                            </ListItemIcon>
                            <ListItemText primary="Liên Hệ" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <FacebookIcon sx={{
                                    color: 'white'
                                }} />
                            </ListItemIcon>
                            <ListItemText primary="Liên Hệ Facebook" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box >
    )
}

export default Nav