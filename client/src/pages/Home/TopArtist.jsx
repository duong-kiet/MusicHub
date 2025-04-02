import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import { Link } from "react-router";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PopUpModal from '../../components/ui/PopUpModal';

export default function TopArtist() {
  const [artistList, setArtistList] = useState([])
  const [open, setOpen] = useState(false);
  const [imageModal, setImageModal] = useState('')
  const handleOpen = (image) => {
    setOpen(true);
    setImageModal(image)
  }
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/artists/top")
      .then(res => res.json())
      .then(data => {
          if(data) {
            setArtistList(data)
          }
      })
  }, []) 

  return (
    <Box mb="30px">
      <Typography
        component={Link}
        to="/artists"
        sx={{
          fontWeight: 700,
          color: '#3ee6ef',
          fontSize: '24px',
          textDecoration: 'none',
          "&:hover": {
            textDecoration: "underline"
          },
        }}
      >
        Nghệ sĩ phổ biến
      </Typography>

      <Grid2 container spacing={2} mt="12px">
        {artistList?.map((artist, index) => {
          return <Grid2 size={2.4} key={artist.id}
            sx={{
              position: 'relative',
              "&:hover .play-btn": {
                display: 'block'
              }
            }}
          >
            <Box>
              <img src={artist.images} width="150px" height="150px" style={{ borderRadius: '50%', objectFit: 'cover'}}/>
              <Typography variant="h6" sx={{ color: "white", fontWeight: '500' , lineHeight: '1.2', marginTop: '6px', fontSize: '16px', 
                "&:hover": {
                  color: "#3ee6ef"
                }
              }}>
                {artist.name}
              </Typography>
              <Typography sx={{ color: "#8b8b8b", textTransform: "capitalize" }}>
                {artist.type}
              </Typography>
              
              <Box
                className="play-btn"
                sx={{
                  position: 'absolute',
                  width: '50px',
                  height: '50px',
                  background: '#1E7CDA',
                  right: '6px',
                  bottom: '60px',
                  borderRadius: '50%',
                  display: 'none'
                }}
                onClick={() => handleOpen(artist.images)}
                
              >
                <PlayCircleFilledIcon sx={{ fontSize: '50px' }} />
              </Box>
            </Box>
          </Grid2>
        })}
      </Grid2>

      <PopUpModal open={open} handleClose={handleClose} imageModal={imageModal}/>
    </Box>
  );
}