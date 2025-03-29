import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { Link } from "react-router";

export default function PopUpModal({open, handleClose, imageModal}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Stack
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          bgcolor: '#061421',
          boxShadow: 24,
          p: 10,
          borderRadius: '16px',
          border: 'none'
        }}
        direction="row" spacing={8}
      >
        <img width="300px" height="300px" src={imageModal} style={{ borderRadius: '50%', objectFit: 'cover' }} />
        <Stack>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#3ee6ef',
              textAlign: 'center',
              marginBottom: '150px'
            }}
          >
            Hãy đăng nhập tài khoản để nghe
          </Typography>

          <Typography
            sx={{
              color: '#3ee6ef',
              textAlign: 'center',
            }}
          >
            Đã có tài khoản ?
            <Link
              to="/user/signin"
              style={{ 
                marginLeft: '4px',
                color: '#1976D2',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}>
              Đăng nhập
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Modal>
  );
}