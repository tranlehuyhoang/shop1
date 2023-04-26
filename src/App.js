import Box from '@mui/material/Box';

import Dangnhap from './components/Dangnhap';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import PaymentScanner from './thanhtoan/PaymentScanner ';





import './App.css';
import Nav from './components/Nav';
import Head from './components/Head';
import Muataikhoan from './components/Muataikhoan';
import { useEffect, useState } from 'react';
import Nav2 from './components/Nav2';
import Nganhang from './components/Nganhang';

import Hoadon from './components/Hoadon';
import Dangki from './components/Dangki';
function App() {
  const [menu, setmenu] = useState();
  return (
    <BrowserRouter basename='/shop1'>
      <Routes>
        <Route path="/" element={
          <Box color={'white'} display={'flex'} height={'100vh'}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <Nav />
            <Box display={'flex'} flexDirection={'column'} width={'100%'}

            >
              <Head menu={menu} setmenu={setmenu} />
              <Muataikhoan
                menu={menu} setmenu={setmenu}

              />
              <PaymentScanner />
              <Nav2 menu={menu} setmenu={setmenu} />
            </Box>
          </Box>
        } />
        <Route path="/ngan-hang" element={
          <Box color={'white'} display={'flex'} height={'100vh'}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <Nav />
            <Box display={'flex'} flexDirection={'column'} width={'100%'} >
              <Head menu={menu} setmenu={setmenu} />
              <Nganhang menu={menu} setmenu={setmenu} />
              <Nav2 menu={menu} setmenu={setmenu} />
            </Box>
          </Box>
        } />
        <Route path="/hoa-don" element={
          <Box>
            <Hoadon />
          </Box>
        } />
        <Route path="/dang-nhap" element={
          <Dangnhap />
        } />
        <Route path="/dang-ki" element={
          <Dangki />
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
