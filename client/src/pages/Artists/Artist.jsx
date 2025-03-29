import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link } from "react-router";
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import PopUpModal from '../../components/ui/PopUpModal';

const Avatar = styled('img')(() => ({
  width: "200px",
  height: "200px",
  borderRadius: '50%',
  objectFit: 'cover'
}));

export default function Artist() {
  const [artistList, setArtistList] = useState([])
  const [open, setOpen] = React.useState(false);
  const [imageModal, setImageModal] = useState('')
  const handleOpen = (image) => {
    setOpen(true);
    setImageModal(image)
  }
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/artists")
      .then(res => res.json())
      .then(data => {
        if (data) {
          setArtistList(data)
        }
      })
  }, [])

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: '#3ee6ef'
        }}
      >
        Danh sách nghệ sĩ
      </Typography>

      <Grid2 container spacing={3} mt="30px">
        {artistList?.map((artist, index) => {
          return <Grid2 size={3} key={artist.id}>
            <Box>
              <Box sx={{
                position: 'relative',
                "&:hover .play-btn": {
                  display: 'block'
                }
              }}>
                <Avatar src={artist.images} />
                <Box
                  className="play-btn"
                  sx={{
                    position: 'absolute',
                    width: '54px',
                    height: '54px',
                    background: '#1E7CDA',
                    right: '2px',
                    bottom: '12px',
                    borderRadius: '50%',
                    display: 'none'
                  }}
                  onClick={() => handleOpen(artist.images)}
                  
                >
                  <PlayCircleFilledIcon sx={{ fontSize: '54px' }} />
                </Box>

              </Box>
              <Typography variant="h6" sx={{
                color: "white", fontWeight: '500', lineHeight: '1.2', marginTop: '6px', fontSize: '16px',
                "&:hover": {
                  color: "#3ee6ef"
                }
              }}>
                {artist.name}
              </Typography>
              <Typography sx={{ color: "#8b8b8b", textTransform: "capitalize" }}>
                {artist.type}
              </Typography>
            </Box>
          </Grid2>
        })}
      </Grid2>

      <PopUpModal open={open} handleClose={handleClose} imageModal={imageModal}/>
      {/* <Modal
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
      </Modal> */}
    </Box >
  );
}