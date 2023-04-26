import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import { Link, useNavigate } from "react-router-dom";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import axios from 'axios';
import store from '../redux/Store';
const Hoadon = () => {
    const navigate = useNavigate();
    const [state, setstate] = useState();
    const [datas, setdata] = useState();

    // console.log(currentState.data);
    // setstate(currentState.data)


    const postanh = async () => {
        const currentState = await store.getState();
        setstate(currentState.data)
        const data = {
            accountNo: 104567890,
            accountName: 'TRAN LE HUY HOANG',
            acqId: 970422,
            amount: currentState.data[1]?.name,
            addInfo: currentState.data[0]?.name,
            format: 'text',
            template: 'compact'
        };
        try {
            const response = await fetch('https://api.vietqr.io/v2/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
         
            setdata(responseData.data.qrDataURL)
        } catch (err) {
            alert(err);
        }
    };


    const formatCurrency = (value) => {
        return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    };
    const handlenganhang = () => {
        navigate("/ngan-hang");

    };

    useEffect(() => {

        postanh();
    }, []);
    return (
        <>
            <Box display={'flex'} flexDirection={'column'} sx={{
                bgcolor: '#FFFFFF  ',
                display: {
                    md: 'block', lg: 'block', sm: 'none', xs: 'none'
                },
            }}>
                <Box bgcolor={'#FFFFFF'}
                    margin={'5px 0'}
                >
                    <Box color={''} sx={{
                        alignItems: 'center',
                        margin: ' 0 auto',
                        width: '730px',
                        display: 'flex',
                        justifyContent: 'end',
                        textAlign: 'center',
                        padding: '10px 0'

                    }}>
                        <Typography fontSize={15} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <img style={{
                                height: '35px',
                                width: '41px',
                            }} src="https://clonesnew.com/public/faces/javax.faces.resource/images/hotline.svg" alt="" />
                            0355275555
                        </Typography>

                        <Typography fontSize={15} ml={2} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <img style={{
                                height: '35px',
                                width: '41px',
                            }} src="https://clonesnew.com/public/faces/javax.faces.resource/images/email.svg" alt="" />
                            cuti29200029@gmail.com
                        </Typography>
                    </Box>
                </Box>
                <Box bgcolor={'#FFFFFF'} >
                    <Box display={'flex'} flexDirection={'column'}>
                        <Box margin={'0 auto'} display={'flex'}>
                            <Box bgcolor={'#262626'}
                                sx={{

                                    width: '260px',
                                    paddingTop: '50px',
                                    padding: '50px 15px'


                                }}
                            >
                                <Button variant="text" >

                                    <img src="https://clonesnew.com/assets/storage/images/logo_dark_H7W.png" alt="" />
                                </Button>
                                <List sx={{
                                    color: 'white'
                                }}>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{

                                            fontSize: '15px'
                                        }}>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}>
                                                <AccountBalanceIcon />
                                            </ListItemIcon>
                                            <p>Ngân Hàng <br /> <span>MB</span>
                                            </p>
                                            <ListItemText primary="
                                    " />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{

                                            fontSize: '15px'
                                        }}>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}>
                                                <CreditCardIcon />
                                            </ListItemIcon>
                                            <p>
                                                Số tài khoản  <br /> <span style={{
                                                    color: 'greenyellow'
                                                }}>104567890</span>

                                            </p>

                                            <ListItemText primary="" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{

                                            fontSize: '15px'
                                        }}>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}>
                                                <PermIdentityIcon />
                                            </ListItemIcon>
                                            <p>Chủ tài khoản <br /> <span>TRAN LE HUY HOANG</span>
                                            </p>
                                            <ListItemText primary=" " />
                                        </ListItemButton>

                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{

                                            fontSize: '15px'
                                        }}>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}>
                                                <LocalAtmIcon />
                                            </ListItemIcon>
                                            <p>Số tiền cần thanh toán  <span style={{ color: 'aqua' }}>{state && formatCurrency(Number(state[1].name))}</span>
                                            </p>
                                            <ListItemText />
                                        </ListItemButton>

                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{

                                            fontSize: '15px'
                                        }}>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}>
                                                <MapsUgcIcon />
                                            </ListItemIcon>
                                            <p>Nội dung chuyển khoản <br /> <span style={{
                                                color: 'yellow'
                                            }}> {state && state[0].name}</span>
                                            </p>
                                            <ListItemText primary=" " />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{

                                            fontSize: '15px'
                                        }}>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}>
                                                <HourglassBottomIcon />
                                            </ListItemIcon>
                                            <p>Trạng thái <br /> <span>Đang chờ thanh toán</span>
                                            </p>
                                            <ListItemText primary="" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box bgcolor={'#FFFFFF'} width={'500px'} p={2} textAlign={'center'}>
                                <Typography fontSize={32} sx={{
                                    background: '-webkit-linear-gradient(60deg, #43cea2, #185a9d)',
                                    '-webkit-background-clip': 'text',
                                    '-webkit-text-fill-color': 'transparent',
                                }}>
                                    QUÉT MÃ QR ĐỂ THANH TOÁN
                                </Typography>
                                <Typography fontSize={16} sx={{

                                }}>
                                    Sử dụng <strong>App Internet Banking</strong> hoặc ứng dụng camera hỗ trợ QR code để quét mã
                                </Typography>
                                <img src={datas && datas} alt="" srcset="" style={{
                                    width: '80%'
                                }} />
                            </Box>
                        </Box>
                        <Box margin={'0 auto'} mb={10} display={'flex'} bgcolor={'#FFFFFF'} width={'807px'} flexDirection={'column'} textAlign={'center'}>
                            <Typography fontSize={16} mt={2} sx={{

                            }}>
                                Vui lòng thanh toán vào thông tin tài khoản trên để hệ thống xử lý hoá đơn tự động.
                            </Typography>
                            <Button variant="text" onClick={handlenganhang}> <ArrowBackIcon /> Quay Lại</Button>

                        </Box>
                    </Box>
                </Box>
            </Box >
            <Box sx={{
                display: {
                    md: 'none', lg: 'none', sm: 'block', xs: 'block'
                },
            }
            }>
                <Box margin={'0 auto'} display={'flex'} flexDirection={'column'}>
                    <Box bgcolor={'#262626'}
                        sx={{


                            paddingTop: '50px',
                            padding: '50px 15px'


                        }}
                    >
                        <Button variant="text" >

                            <img style={{
                                width: '100%'
                            }} src="https://clonesnew.com/assets/storage/images/logo_dark_H7W.png" alt="" />
                        </Button>
                        <List sx={{
                            color: 'white'
                        }}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{

                                    fontSize: '15px'
                                }}>
                                    <ListItemIcon sx={{
                                        color: 'white'
                                    }}>
                                        <AccountBalanceIcon />
                                    </ListItemIcon>
                                    <p>Ngân Hàng <br /> <span>MB</span>
                                    </p>
                                    <ListItemText primary="
                    " />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{

                                    fontSize: '15px'
                                }}>
                                    <ListItemIcon sx={{
                                        color: 'white'
                                    }}>
                                        <CreditCardIcon />
                                    </ListItemIcon>
                                    <p>
                                        Số tài khoản  <br /> <span style={{
                                            color: 'greenyellow'
                                        }}>104567890</span>

                                    </p>

                                    <ListItemText primary="" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{

                                    fontSize: '15px'
                                }}>
                                    <ListItemIcon sx={{
                                        color: 'white'
                                    }}>
                                        <PermIdentityIcon />
                                    </ListItemIcon>
                                    <p>Chủ tài khoản <br /> <span>TRAN LE HUY HOANG</span>
                                    </p>
                                    <ListItemText primary=" " />
                                </ListItemButton>

                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{

                                    fontSize: '15px'
                                }}>
                                    <ListItemIcon sx={{
                                        color: 'white'
                                    }}>
                                        <LocalAtmIcon />
                                    </ListItemIcon>
                                    <p>Số tiền cần thanh toán  <span style={{ color: 'aqua' }}>{state && formatCurrency(Number(state[1].name))}</span>
                                    </p>
                                    <ListItemText />
                                </ListItemButton>

                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{

                                    fontSize: '15px'
                                }}>
                                    <ListItemIcon sx={{
                                        color: 'white'
                                    }}>
                                        <MapsUgcIcon />
                                    </ListItemIcon>
                                    <p>Nội dung chuyển khoản <br /> <span style={{
                                        color: 'yellow'
                                    }}> {state && state[0].name}</span>
                                    </p>
                                    <ListItemText primary=" " />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{

                                    fontSize: '15px'
                                }}>
                                    <ListItemIcon sx={{
                                        color: 'white'
                                    }}>
                                        <HourglassBottomIcon />
                                    </ListItemIcon>
                                    <p>Trạng thái <br /> <span>Đang chờ thanh toán</span>
                                    </p>
                                    <ListItemText primary="" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                    <Box bgcolor={'#FFFFFF'} p={2} textAlign={'center'}>
                        <Typography fontSize={32} sx={{
                            background: '-webkit-linear-gradient(60deg, #43cea2, #185a9d)',
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                        }}>
                            QUÉT MÃ QR ĐỂ THANH TOÁN
                        </Typography>
                        <Typography fontSize={16} sx={{

                        }}>
                            Sử dụng <strong>App Internet Banking</strong> hoặc ứng dụng camera hỗ trợ QR code để quét mã
                        </Typography>
                        <img src={datas && datas} alt="" srcset="" style={{
                            width: '80%'
                        }} />
                    </Box>
                </Box>
                <Box margin={'0 auto'} mb={10} display={'flex'} bgcolor={'#FFFFFF'} flexDirection={'column'} textAlign={'center'}>
                    <Typography fontSize={16} mt={2} sx={{

                    }}>
                        Vui lòng thanh toán vào thông tin tài khoản trên để hệ thống xử lý hoá đơn tự động.
                    </Typography>
                    <Link to={'/ngan-hang'}>
                        <Button variant="text" > <ArrowBackIcon /> Quay Lại</Button>
                    </Link>

                </Box>
            </Box>
        </>
    )
}

export default Hoadon