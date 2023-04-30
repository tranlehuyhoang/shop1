import { Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TableContainer from '@mui/material/TableContainer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Footer from './Footer';
import Nav2 from './Nav2';
import store from '../redux/Store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setPrice } from '../redux/Reducer';
const notify1 = () => toast.error("Vui lòng đăng nhập");
const notify2 = () => toast.error("xác nhận mật khẩu sai");
const notify3 = () => toast.success("Thành công");
const notify4 = () => toast.error("Không hợp lệ");
const notify5 = () => toast.error("Số ti");

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#222222',
    border: '2px solid #000',
    color: 'white',
    boxShadow: 24,
    p: '10px 0',
    border: '0'
};

const Nganhang = ({ menu, setmenu }) => {
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const name = localStorage.getItem("name")




    const chinhstate = () => {
        setmenu('none')
        setstate(false)
    }
    const { pathname } = useLocation();

    const navigate = useNavigate();

    function checkF5KeyPress(event) {
        if ((event.keyCode === 116) || (event.key === "F5")) {
            event.preventDefault();
        }
    }




    const [userss, setsuser] = useState(undefined);
    useEffect(() => {
        setstate12(20000)
        dispatch(setName(name))
        dispatch(setPrice(20000));
        console.log(pathname)
        if (pathname !== '') {

            window.onbeforeunload = function () {
                return "đồng ý mất hết dữ liệu"
            }
        }
    }, []);

    // Lấy dữ liệu
    const notify = () => toast.error("Số tiền phải lớn hơn 20.000 vnđ");

    const [state, setstate] = useState(false);
    const [state1, setstate1] = useState(false);
    const [state12, setstate12] = useState(20000);
    const taohoadon = () => {

    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const formatCurrency = (value) => {
        return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    };
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: '#222222',

        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    const handleInputChange = (event) => {
        setstate12(event.target.value);
        dispatch(setPrice(event.target.value));
    };

    function MyComponent() {
        if (Number(state12) > 20000) {
            return (
                <Link to={'/hoa-don'}>
                    <Button variant="contained" color='primary' onClick={e => {
                        taohoadon()


                    }}> Tạo Hóa Đơn</Button>
                </Link>
            )
        } else {
            return (
                <Link to={'/hoa-don'}>
                    <Button variant="contained" color='primary' onClick={e => {
                        taohoadon()


                    }}> Tạo Hóa Đơn</Button>
                </Link>
            )
        }
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Modal
                open={state1}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} p={2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" p={2}>
                        Nhập số tiền cần nạp
                    </Typography>
                    <Box bgcolor={'#181818'} p={2} sx={{
                        border: '1px solid #eff0f1',
                        borderLeft: '0',
                        borderRight: '0'
                    }}>
                        <TextField
                            value={state12}
                            onChange={handleInputChange}
                            id="filled-number"
                            label="Nhập số tiền bạn cần nạp vào hệ thống"
                            type="number"
                            variant="filled"
                            fullWidth
                            placeholder=''
                            inputProps={{
                                style: {
                                    color: "white",
                                    fontSize: "1.2rem",
                                },
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {

                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: "white",
                                    width: '100%',
                                    borderColor: "red",
                                },
                            }}
                        />



                        <Box

                            display={'flex'} justifyContent={'space-between'}>
                            <Box display={'flex'} flexDirection={'column'}

                            >
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Số tiền cần thanh toán
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }} color={'blue'}>
                                    <span>{formatCurrency(Number(state12))}</span>


                                </Typography>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Số tiền nhận được


                                </Typography> <Typography id="modal-modal-description" sx={{ mt: 2 }} color={'red'}>
                                    <span>{formatCurrency(Number(state12))}</span>


                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Stack p={2} spacing={2} direction="row" display={'flex'} justifyContent={'flex-end'}>

                        <Button variant="contained" color='error' sx={{ bgcolor: '#8f9fbc' }} onClick={e => { setstate1(false) }} >Đóng</Button>

                        {Number(state12) < 20000
                            ?
                            <Button variant="contained" color='primary' onClick={e => {

                                notify()



                            }} > Tạo Hóa Đơn</Button>
                            :

                            <Link to={'/hoa-don'}>
                                <Button variant="contained" color='primary' onClick={e => {
                                    taohoadon()

                                }}> Tạo Hóa Đơn</Button>
                            </Link>
                        }



                    </Stack>

                </Box>
            </Modal >

            <Box

                onClick={chinhstate} mt={2} display={'flex'} sx={{
                    overflowY: 'scroll',
                    flexDirection: 'column',
                    textAlign: 'center',



                }} bgcolor={'#222222'} height={'1000px'} >


                <Box>
                    <Box position={'relative'} p={2} sx={{
                        border: '1px solid #1976d2',
                        flex: '1', display: 'flex', flexDirection: 'column',
                        backgroundColor: '#181818',
                        textAlign: 'start',
                        color: '#c7cbd3!important'
                    }} variant="outlined">

                        <Typography variant="h6" gutterBottom fontSize={16}>
                            Vui lòng nhập đúng nội dung CHUYỂN, cộng tiền sau 1 phút - 10 phút
                            <br />
                            Nếu nhập sai nội dung sẽ bị trừ 10% giá trị nạp
                            <br />

                            Nếu hệ thống không cộng tiền sau 10p hãy liên hệ Zalo: 0337799453 hoặc call 0337799453


                        </Typography>


                    </Box>
                    <Box mb={80} mt={2} p={2} sx={{
                        flex: '2',
                        backgroundColor: '#181818',
                        textAlign: 'start',

                    }} variant="outlined">
                        <Typography variant="h5" gutterBottom >
                            Nạp tiền theo hoá đơn


                        </Typography>
                        <Button variant="text" onClick={e => { setstate1(true) }}>
                            <img style={{
                                margin: '50px'
                            }} src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/mb-bank-logo-inkythuatso-01-10-09-02-50.jpg" alt="" />

                        </Button>
                    </Box>
                </Box>
                <Footer />

            </Box >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default Nganhang