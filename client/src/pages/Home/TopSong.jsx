import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import { Link } from "react-router";

export default function TopSong() {
  const [songList, setSongList] = useState([])

  useEffect(() => {
    console.log("Cool")
    fetch("http://localhost:5000/api/v1/artists/top")
      .then(res => res.json())
      .then(data => {
          if(data) {
            setSongList(data)
          }
      })
  }, []) 

  return (
    <Box mb="24px">
      <Typography
        component={Link}
        to="/songs"
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
        Những bài hát phổ biến
      </Typography>

      <Grid2 container spacing={2} mt="12px">
        <Grid2 size={2.4}>
          <Box>
            <img src="https://i.scdn.co/image/ab6761610000e5eba03696716c9ee605006047fd" width="100%" style={{ borderRadius: '12px' }}/>
            <Typography variant="h6" sx={{ color: "white", fontWeight: '500' , lineHeight: '1.2', marginTop: '6px'}}>
              Sự nghiệp chướng
            </Typography>
            <Typography sx={{ color: "#8b8b8b" }}>
              Pháo
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={2.4}>
          <Box>
            <img src="https://i.scdn.co/image/ab6761610000e5eba03696716c9ee605006047fd" width="100%"/>
            <Typography variant="h6" sx={{ color: "white", fontWeight: '500' }}>
              Sự nghiệp chướng
            </Typography>
            <Typography sx={{ color: "#8b8b8b" }}>
              Pháo
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={2.4}>
          <Box>
            <img src="https://i.scdn.co/image/ab6761610000e5eba03696716c9ee605006047fd" width="100%"/>
            <Typography variant="h6" sx={{ color: "white", fontWeight: '500' }}>
              Sự nghiệp chướng
            </Typography>
            <Typography sx={{ color: "#8b8b8b" }}>
              Pháo
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={2.4}>
          <Box>
            <img src="https://i.scdn.co/image/ab6761610000e5eba03696716c9ee605006047fd" width="100%"/>
            <Typography variant="h6" sx={{ color: "white", fontWeight: '500' }}>
              Sự nghiệp chướng
            </Typography>
            <Typography sx={{ color: "#8b8b8b" }}>
              Pháo
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={2.4}>
          <Box>
            <img src="https://i.scdn.co/image/ab6761610000e5eba03696716c9ee605006047fd" width="100%"/>
            <Typography variant="h6" sx={{ color: "white", fontWeight: '500' }}>
              Sự nghiệp chướng
            </Typography>
            <Typography sx={{ color: "#8b8b8b" }}>
              Pháo
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  )
}