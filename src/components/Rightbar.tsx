import { Box, Typography } from '@mui/material';

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: 'none', // xs size: display none (> 0px)
          sm: 'block', // sm size: display block (> 600px)
        },
      }}
    >
      <Box position="fixed">
        <Typography
          variant="h6"
          fontWeight={100}
        >
          Online Friends
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
