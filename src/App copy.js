import * as React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';


import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home4';
import Convert from './pages/Convert';
import View from './pages/View';

export default function App() {
  return (
    <Router>
      <Box
        sx={{
          backgroundColor: '#f4f4f4',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100vw',
          maxHeight: '99vh',
          overflowX: 'hidden',
        }}
      >
        {/* <HOme /> */}

        {/* <Container sx={{ flex: 1, py: 1 }}> */}
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/convert" element={<Convert />}/> 
            <Route path="/view" element={<View />} />
            <Route path="*" element={<Home />} />
           </Routes>
        {/* </Container> */}

        {/* <Footer /> */}
      </Box>
    </Router>
  );
}
