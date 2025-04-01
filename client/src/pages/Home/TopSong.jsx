import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import { Link } from "react-router";

export default function TopSong() {
  const [songList, setSongList] = useState([])

  useEffect(() => {
    console.log("Cool")
    fetch("http://localhost:5000/api/v1/songs/top")
      .then(res => res.json())
      .then(data => {
        if(data) {
          setSongList(data)
        }
      })
  }, []) 

  return (
    <Box mb="30px">
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
        Bài hát phổ biến
      </Typography>

      <Grid2 container spacing={2} mt="12px">
        {songList?.map((song, index) => {
          return <Grid2 size={2.4} key={song.id}>
              <Box>
                <img src={song.avatar} width="100%" style={{ borderRadius: '12px' }}/>
                <Typography sx={{ color: "white", fontWeight: '500' , lineHeight: '1.2', marginTop: '6px', fontSize: '18px'}}>
                  {song.name}
                </Typography>
                <Typography sx={{ color: "#8b8b8b" }}>
                  {song.artistName}
                </Typography>
              </Box>
          </Grid2>
        })}
      </Grid2>
    </Box>
  );
}