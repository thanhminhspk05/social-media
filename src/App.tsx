import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  const [show, setShow] = useState(false);

  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
