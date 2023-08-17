import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import { generateInfo } from '../utils';

const Rightbar = () => {
  const data = generateInfo(10);

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

        <AvatarGroup max={14}>
          {data.map((item, index) => (
            <Avatar
              key={index}
              alt={item}
              src={`https://source.unsplash.com/random/200x200${Math.floor(Math.random() * 1000)}`}
            />
          ))}
        </AvatarGroup>

        <Typography
          variant="h6"
          fontWeight={100}
        >
          Lastest Photos
        </Typography>

        <ImageList
          sx={{ width: 500, height: 450 }}
          cols={3}
          rowHeight={164}
        >
          {data.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={`https://source.unsplash.com/random/200x200${Math.floor(Math.random() * 1000)}`}
                alt={item}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </>
            }
          />
        </ListItem>
      </Box>
    </Box>
  );
};

export default Rightbar;
