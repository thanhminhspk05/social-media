import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { route } from './../route';
const Sidebar = () => {
  return (
    <Box
      flex={1}
      padding={2}
      sx={{
        display: {
          xs: 'none', // xs size: display none (> 0px)
          sm: 'block', // sm size: display block (> 600px)
        },
      }}
    >
      <Box position="fixed">
        <List>
          {route.map((item) => (
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
