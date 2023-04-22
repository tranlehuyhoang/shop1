import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
const Muataikhoan = () => {

    useEffect(() => {
        setstate(true)
    }, []);
    const [state, setstate] = useState(false);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: '#222222',

        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (
        <>
            <Modal
                open={state}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} p={2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" p={2}>
                        Thông báo
                    </Typography>
                    <Box bgcolor={'#181818'} p={2} sx={{
                        border: '1px solid #eff0f1',
                        borderLeft: '0',
                        borderRight: '0'
                    }}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Lưu ý : Để tránh mất tài khoản đã mua


                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Quý khách vui lòng tải các đơn hàng đã mua về , sau 5 ngày hệ thống sẽ tự động xóa các đơn hàng




                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            xin cảm ơn !!


                        </Typography>
                    </Box>
                    <Stack p={2} spacing={2} direction="row" display={'flex'} justifyContent={'flex-end'}>

                        <Button variant="contained" color='primary' onClick={e => { setstate(false) }} >Không hiển thị lại</Button>
                        <Button variant="contained" color='error' onClick={e => { setstate(false) }} >Đóng</Button>

                    </Stack>

                </Box>
            </Modal >
            <Box onClick={e => { setstate(false) }} mt={2} display={'flex'} sx={{
                overflowY: 'scroll',
                flexDirection: 'column',
                textAlign: 'center',


            }} bgcolor={'#222222'} height={'1000px'} >


                <Box>
                    <Box position={'relative'} sx={{
                        border: '1px solid #1976d2',
                        flex: '1', display: 'flex', flexDirection: 'column',
                        backgroundColor: '#181818'
                    }} variant="outlined">
                        <Typography variant="h6" gutterBottom gap={1} color={'#8e44ad'}>
                            VUI LÒNG BANK MB  ĐỂ AUTO NHÉ
                            😘
                        </Typography>
                        <Typography variant="h6" gutterBottom color={'#27ae60'} fontSize={16}>
                            CLONESNEW.COM - Cam kết cung cấp hàng clone uy tín và chuyên nghiệp
                        </Typography>
                        <Typography variant="h6" gutterBottom color={'#27ae60'} fontSize={16}>
                            Mọi danh mục clone đều có ghi chú rõ ràng về các kiểu xuất file
                        </Typography>
                        <Typography variant="h6" gutterBottom fontSize={16}>
                            <span style={{ backgroundColor: '#f1c40f' }} fontSize={16}>Zalo hỗ trợ :</span> 0337799453
                            <br />
                            <span style={{ backgroundColor: '#f1c40f' }} fontSize={16}>Hotline hỗ trợ:</span> 0337799453
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Lưu Ý:
                        </Typography>

                        <Typography variant="h6" gutterBottom fontSize={16}>
                            Để tránh lấy mất tiền và clone các bạn vui lòng không đặt tài khoản hoặc mật khẩu trùng với web khác
                            <br />
                            Khuyến cáo nên mua đủ sài, Clone được checklive trước khi xuất file, không có chính sách bảo hành
                        </Typography>
                        <Typography variant="h6" gutterBottom fontSize={16}>
                            Rất cảm ơn các bạn đã và đang ủng hộ CLONESNEW.COM, rất mong rằng sẽ phục vụ các bạn tốt nhất 💖
                        </Typography>
                        <Typography variant="h4" gutterBottom color={'#8e44ad'}>
                            XÓA DATA ĐƠN HÀNG SAU 5 NGÀY KỂ TỪ NGÀY MUA AE LƯU Ý
                        </Typography>

                    </Box>
                    <Box mb={80} sx={{
                        flex: '2'
                    }} variant="outlined">
                        <TableContainer component={Paper} sx={{ margin: '10px 0' }}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{ alignItems: 'center', display: 'flex' }}>
                                            <img src="https://clonesnew.com/assets/storage/images/categoryQVJ1.png" style={{ width: '30px' }} ></img>
                                            CLONE FACEBOOK</StyledTableCell>
                                        <StyledTableCell align="center">Quốc gia	</StyledTableCell>
                                        <StyledTableCell align="center">Hiện có</StyledTableCell>
                                        <StyledTableCell align="center">Đã bán</StyledTableCell>
                                        <StyledTableCell align="center">Giá</StyledTableCell>
                                        <StyledTableCell align="center">Thao tác</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <StyledTableRow >
                                        <StyledTableCell align="center">
                                            <Typography variant="h6" gutterBottom fontSize={12} textAlign={'left'} color={'white'}>
                                                <img src="https://clonesnew.com/assets/storage/images/categoryQVJ1.png" style={{ width: '20px' }} ></img>

                                                Clone Ngoại Ramdom IP Ngoại ( Băm Ads - BM ) <br />
                                                ✅Định dạng: UID|PASS|2FA||TOKEN EAAAU|COOKIE|MAIL(hàng new 100% chưa đụng - chưa log ip việt ) NAME US - IP Ngoại - 2FA <br /> - Ver Mail Hàng Băm ADS, REG BM (Chuyên Băm ADS )
                                            </Typography>

                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" sx={{ color: 'white', textTransform: 'none' }}>
                                            <img src="https://flagicons.lipis.dev/flags/4x3/us.svg" style={{ width: '20px' }} ></img>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" sx={{ color: 'white', textTransform: 'none' }}>
                                            <Button variant="outlined" size="small" sx={{
                                                color: 'white', border: '1px solid #19b3b3',
                                                ":hover": {
                                                    bgcolor: '#19b3b3',
                                                    border: '1px solid #19b3b3'

                                                }
                                            }}>
                                                <ShoppingCartIcon sx={{ color: 'white', fontSize: '11px' }} /> 7.881
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" sx={{ textAlign: 'center', color: 'white' }}>    <Button sx={{
                                            color: 'white', textTransform: 'none', display: 'flex', flexWrap: 'wrap', alignItems: "center", border: '1px #3cb72c solid',
                                            ":hover": {
                                                bgcolor: '#3cb72c',
                                                border: '1px solid #3cb72c'
                                            }
                                        }
                                        } variant="outlined" size="small">
                                            <span style={{ display: 'flex', alignItems: 'center' }}> <AddShoppingCartIcon sx={{ color: 'white', fontSize: '14px' }} />Đã bán:</span> <span >73.476</span>
                                        </Button></StyledTableCell>
                                        <StyledTableCell align="center" sx={{ color: 'white', textTransform: 'none' }}>     <Button sx={{
                                            color: 'white', textTransform: 'none', border: '1px solid #f42b3d',
                                            ":hover": {
                                                bgcolor: '#f42b3d',
                                                border: '1px solid #f42b3d'
                                            }
                                        }} variant="outlined" size="small">
                                            <LocalAtmIcon sx={{ color: 'white', fontSize: '14px' }} /> 5.000 đ
                                        </Button></StyledTableCell>
                                        <StyledTableCell align="center" sx={{ color: 'white', textTransform: 'none' }}>   <Button sx={{ color: 'white', textTransform: 'none' }} variant="contained" size="small">
                                            <ShoppingCartIcon sx={{ color: 'white', fontSize: '14px' }} />MUA NGAY
                                        </Button></StyledTableCell>
                                    </StyledTableRow>

                                </TableBody>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{ alignItems: 'center', display: 'flex' }}>
                                            <img src="https://clonesnew.com/assets/storage/images/category9OH.png" style={{ width: '30px' }} ></img>
                                            CLONE TIKTOK</StyledTableCell>
                                        <StyledTableCell align="center">Quốc gia	</StyledTableCell>
                                        <StyledTableCell align="center">Hiện có</StyledTableCell>
                                        <StyledTableCell align="center">Đã bán</StyledTableCell>
                                        <StyledTableCell align="center">Giá</StyledTableCell>
                                        <StyledTableCell align="center">Thao tác</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <StyledTableRow >
                                        <StyledTableCell align="center">
                                            <Typography variant="h6" gutterBottom fontSize={12} textAlign={'left'} color={'white'}>
                                                <img src=" 
                                 https://clonesnew.com/assets/storage/images/category9OH.png
                                 " style={{ width: '20px' }} ></img>

                                                CLONE TIKTOK - Hàng Ngâm Tháng 5/2022 Không Hỗ Trợ Đặt Đơn <br />
                                                ✅Định Dạng : ID|Pass (Không Bảo Hành) mua vừa đủ dùng - test trước khi mua sll hàng không bảo hành mã
                                            </Typography>

                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" sx={{ color: 'white', textTransform: 'none' }}>
                                            <img src="https://flagicons.lipis.dev/flags/4x3/vn.svg" style={{ width: '20px' }} ></img>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" sx={{ color: 'white', textTransform: 'none' }}>
                                            <Button variant="outlined" size="small" sx={{
                                                color: 'white', border: '1px solid #19b3b3',
                                                ":hover": {
                                                    bgcolor: '#19b3b3',
                                                    border: '1px solid #19b3b3'

                                                }
                                            }}>
                                                <ShoppingCartIcon sx={{ color: 'white', fontSize: '11px' }} /> 7.881
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" sx={{ textAlign: 'center', color: 'white' }}>    <Button sx={{
                                            color: 'white', textTransform: 'none', display: 'flex', flexWrap: 'wrap', alignItems: "center", border: '1px #3cb72c solid',
                                            ":hover": {
                                                bgcolor: '#3cb72c',
                                                border: '1px solid #3cb72c'
                                            }
                                        }
                                        } variant="outlined" size="small">
                                            <span style={{ display: 'flex', alignItems: 'center' }}> <AddShoppingCartIcon sx={{ color: 'white', fontSize: '14px' }} />Đã bán:</span> <span >73.476</span>
                                        </Button></StyledTableCell>
                                        <StyledTableCell align="center" sx={{ color: 'white', textTransform: 'none' }}>     <Button sx={{
                                            color: 'white', textTransform: 'none', border: '1px solid #f42b3d',
                                            ":hover": {
                                                bgcolor: '#f42b3d',
                                                border: '1px solid #f42b3d'
                                            }
                                        }} variant="outlined" size="small">
                                            <LocalAtmIcon sx={{ color: 'white', fontSize: '14px' }} /> 5.000 đ
                                        </Button></StyledTableCell>
                                        <StyledTableCell align="center" sx={{ color: 'white', textTransform: 'none', fontSize: '11px' }}>   <Button sx={{ color: 'white', textTransform: 'none' }} variant="contained" size="small">
                                            <ShoppingCartIcon sx={{ color: 'white', fontSize: '14px' }} />MUA NGAY
                                        </Button></StyledTableCell>
                                    </StyledTableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Box>
                </Box>
                <Footer />

            </Box >
        </>
    )
}

export default Muataikhoan