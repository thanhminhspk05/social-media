import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import MoodIcon from '@mui/icons-material/Mood';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';

import { useState } from 'react';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25)', md: 30 } }}
        onClick={handleOpen}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ padding: 0 }}
      >
        <Box
          width={400}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant="h6"
            color="gray"
            textAlign="center"
          >
            Create post
          </Typography>

          <UserBox>
            <Avatar
              sx={{
                width: '32px',
                height: '32px',
              }}
              src={`https://source.unsplash.com/random/200x200${Math.floor(Math.random() * 1000)}`}
            />
            <Typography>John Doe</Typography>
          </UserBox>

          <TextField
            id="multi-text"
            multiline
            rows={4}
            placeholder="What's on your mind? "
            variant="standard"
            sx={{ width: '100%' }}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction="row"
              gap={1}
              alignItems="center"
              marginTop={1}
            >
              <MoodIcon color="primary" />
              <ImageIcon color="secondary" />
              <VideocamIcon color="success" />
              <PersonAddIcon color="error" />
            </Stack>

            <Stack marginTop={1}>
              <Button
                size="small"
                variant="contained"
              >
                Post
              </Button>
            </Stack>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
