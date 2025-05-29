import { Box } from '@mui/material';
import Home from './pages/Home5';

export default function App() {
  return (
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
        <Home />

      
      </Box>
  );
}
