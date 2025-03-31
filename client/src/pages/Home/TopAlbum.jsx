import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import { Link } from "react-router";

export default function TopArtist() {
  const [albumList, setAlbumList] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/albums/top")
      .then(res => res.json())
      .then(data => {
          if(data) {
            setAlbumList(data)
          }
      })
  }, []) 

  return (
    <Box mb="24px">
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
        ALbum phổ biến
      </Typography>

      <Grid2 container spacing={2} mt="12px">
        {albumList?.map((album, index) => {
          return <Grid2 size={2.4} key={artist.id}>
              <Box>
                <img src={artist.images} width="150px" height="150px" style={{ borderRadius: '50%', objectFit: 'cover'}}/>
                <Typography variant="h6" sx={{ color: "white", fontWeight: '500' , lineHeight: '1.2', marginTop: '6px', fontSize: '16px', 
                  "&:hover": {
                    color: "#3ee6ef"
                  }
                }}>
                  {album.name}
                </Typography>
                <Typography sx={{ color: "#8b8b8b", textTransform: "capitalize" }}>
                  {artist.type}
                </Typography>
              </Box>
          </Grid2>
        })}
      </Grid2>
    </Box>
  );
}