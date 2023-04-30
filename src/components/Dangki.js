import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase/config';
import '../App.css'
import { addUser } from '../firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Dangki = () => {
    const notify1 = () => toast.error("Tài khoản đã tồn tại");
    const notify2 = () => toast.error("xác nhận mật khẩu sai");
    const notify3 = () => toast.success("Thành công");
    const notify4 = () => toast.error("Không hợp lệ");
    const notify5 = () => toast.error("Tên tài khoản phải lớn hơn 6 kí tự");

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const ariaLabel = { 'aria-label': 'description' };
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const [showPassword1, setShowPassword1] = useState(false);
    const handleShowPassword1 = () => {
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert('Passwords do not match.');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, `${email}@gmail.com`, password);
            localStorage.setItem('name', email);
            addUser(email, 0)
            navigate('/')
        } catch (error) {
            console.error(error);
            alert(error.message);
        }

    }


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
            <Box maxWidth={400} borderRadius={3} bgcolor={"#181818"} color={'white'}
                sx={{
                    margin: '30px',
                    textAlign: 'center',
                    padding: '30px 50px'
                }}
            >

                <img src="https://clonesnew.com/assets/storage/images/logo_dark_H7W.png" alt="" />
                <Typography fontSize={30} mt={3} sx={{

                }}>
                    ĐĂNG KÍ
                </Typography>
                <div className="form__group field" style={{
                    margin: '35px 0'
                }}>
                    <input type="input" className="form__field" placeholder="Name"
                        style={{
                            margin: '10px 0'
                        }}
                        required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="name" className="form__label">UserName</label>
                </div>

                <div className="form__group field" style={{ display: 'flex' }}>
                    <input
                        style={{
                            margin: '20px 0'
                        }}
                        type={showPassword ? "text" : "password"}
                        className="form__field"
                        placeholder="lớn hơn 6 kí tự"

                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="text">

                        <div onClick={handleShowPassword}>
                            {!showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                        </div>
                    </Button>
                    <label htmlFor="name" className="form__label">Password</label>
                </div>
                <div className="form__group field" style={{
                    display: 'flex',
                    margin: '30px 0'
                }}>
                    <input
                        style={{
                            margin: '10px 0'
                        }}
                        type={!showPassword1 ? "text" : "password"}
                        className="form__field"
                        placeholder="Password"
                        required
                        value={confirmpassword}
                        onChange={(e) => setconfirmpassword(e.target.value)}
                    />
                    <Button variant="text">

                        <div onClick={handleShowPassword1}>
                            {showPassword1 ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                        </div>
                    </Button>
                    <label htmlFor="name" className="form__label">Confirm password</label>
                </div>
                <Link >
                    <Button
                        onClick={handleSignup}
                        sx={{
                            marginTop: '30px',
                            width: '100%'
                        }} variant="contained">Đăng kí</Button>
                </Link>
                <Typography fontSize={15} mt={3} sx={{

                }}>
                    Bạn đã có tài khoản? <Link to={'/dang-nhap'} style={{ color: '#3378ff' }}>Đăng nhập</Link>
                </Typography>
            </Box>
        </div>
    )
}

export default Dangki;
