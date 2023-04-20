import Box from '@mui/material/Box';










import './App.css';
import Nav from './components/Nav';
import Head from './components/Head';
import Slide from './components/Slide';
function App() {
  return (
    <Box color={'white'} display={'flex'}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Nav />
      <Box display={'flex'} flexDirection={'column'} width={'100%'} >
        <Head />
        <Slide />
      </Box>
    </Box>
  );
}

export default App;
