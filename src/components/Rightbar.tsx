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

import { generateInfo, generateMassage } from '../utils';

const Rightbar = () => {
  const data = generateInfo(10);
  const masage = generateMassage(10);

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
      <Box position="absolute">
        <Typography
          variant="h6"
          fontWeight={100}
        >
          Online Friends
        </Typography>

        <AvatarGroup max={10}>
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

        {data.map((item, index) => (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={item}
                src={`https://source.unsplash.com/random/200x200${Math.floor(Math.random() * 1000)}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item}
              secondary={masage[index]}
            />
          </ListItem>
        ))}
      </Box>
    </Box>
  );
};

export default Rightbar;
