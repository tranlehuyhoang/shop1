import Box from '@mui/material/Box';



import { BrowserRouter, Routes, Route } from 'react-router-dom';






import './App.css';
import Nav from './components/Nav';
import Head from './components/Head';
import Muataikhoan from './components/Muataikhoan';
import { useState } from 'react';
import Nav2 from './components/Nav2';
import Nganhang from './components/Nganhang';
import Hoadon from './components/Hoadon';
function App() {
  const [menu, setmenu] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Box color={'white'} display={'flex'} height={'100vh'}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <Nav />
            <Box display={'flex'} flexDirection={'column'} width={'100%'} >
              <Head menu={menu} setmenu={setmenu} />
              <Muataikhoan />
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
              <Nganhang />
              <Nav2 menu={menu} setmenu={setmenu} />
            </Box>
          </Box>
        } />
        <Route path="/hoa-don" element={
          <Hoadon />
        } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
