import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PetsIcon from '@mui/icons-material/Pets';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { styled } from 'styled-components';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex', // over small using flex, under small using none
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
        >
          <FacebookIcon />
          <Typography
            variant="h6"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            FACEBOOK
          </Typography>
        </Box>

        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Box
          display="flex"
          alignItems="center"
          gap="20px"
        >
          {/* hide icon when small size */}
          <Icons>
            <Badge
              badgeContent={4}
              color="error"
            >
              <MailIcon />
            </Badge>
            <Badge
              badgeContent={2}
              color="error"
            >
              <NotificationsIcon />
            </Badge>
          </Icons>

          <Avatar
            src="https://source.unsplash.com/random/200x200"
            sx={{ width: 32, height: 32 }}
            onClick={() => setOpen(true)}
          />
        </Box>
      </StyledToolbar>

      <Menu
        id="demo-menu"
        aria-labelledby="demo-button"
        open={open}
        onClose={() => setOpen(false)} // click outside menu item
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
