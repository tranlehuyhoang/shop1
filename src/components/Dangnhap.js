import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import auth from '../firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../App.css'

const Dangnhap = () => {
    const navigate = useNavigate();
    const notify1 = () => toast.error("Tài khoản không tồn tại");
    const notify2 = () => toast.error(" mật khẩu sai");
    const notify3 = () => toast.success("Thành công");
    const notify4 = () => toast.error("Vui lòng nhập thông tin");
    const notify5 = () => toast.error("Tên tài khoản phải lớn hơn 6 kí tự");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const ariaLabel = { 'aria-label': 'description' };
    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(`${email}@gmail.com`, password)
            .then((userCredential) => {
                localStorage.setItem("email", email);
                // Đăng nhập thành công, xử lý logic tại đây
                notify3()
                navigate("/");
            })
            .catch((error) => {


                if (error.code == 'auth/missing-password') {
                    notify4()


                } else if (error.code == 'auth/user-not-found') {
                    notify1()

                } else if (error.code == 'auth/wrong-password') {
                    notify2()

                } else {
                    console.log(error.code)
                }


            });
    };
    const [showPassword1, setShowPassword1] = useState(false);
    const handleShowPassword1 = () => {
        setShowPassword1(!showPassword1);
    };


    return (

        <div className='dangnhap'

        >
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
                <div className="form__group field" style={{
                    margin: '35px 0'
                }}>
                    <input className="form__field" placeholder="Name" required

                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />

                    <label htmlFor="name" className="form__label">UserName</label>
                </div>
                <div className="form__group field"
                    style={{
                        marginTop: '50px'
                    }}
                >
                    <div style={{
                        display: 'flex'
                    }}>
                        <div>
                            <input


                                type={showPassword1 ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form__field" placeholder="Name" name="name" id='name' required />
                            <label htmlFor="name" className="form__label">Password</label>
                        </div>
                        <Button variant="text" onClick={handleShowPassword1}>

                            <div >
                                {!showPassword1 ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                            </div>
                        </Button>
                    </div>
                </div>
                <Link
                    onClick={handleLogin}
                >
                    <Button sx={{
                        marginTop: '30px',
                        width: '100%'
                    }} variant="contained">Đăng nhập</Button>
                </Link>
                <Typography fontSize={15} mt={3} sx={{

                }}>
                    Bạn không có tài khoản? <Link style={{ color: '#3378ff' }} to={'/dang-ki'}>Đăng kí</Link>
                </Typography>
            </Box>
        </div>
    )
}

export default Dangnhap