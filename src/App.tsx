import { Box, Stack, createTheme } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  const [mode, setMode] = useState('dark');

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          marginRight={6}
        >
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
