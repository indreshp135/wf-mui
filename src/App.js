import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import URLRedirectManager from './components/Rurls';
import ForgotPassword from './components/Password';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1, mr: 2 }}>
          <URLRedirectManager />
        </Box>
        <Box sx={{ flex: 1, ml: 2 }}>
          <ForgotPassword />
        </Box>
      </Box>
    </Container>
  );
}
