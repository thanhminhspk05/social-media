import styled from '@emotion/styled';
import { Box } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Post from './Post';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));

const Feed = () => {
  return (
    <Box
      flex={4}
      padding={2}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
