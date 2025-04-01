import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Sider({ sider }) {
  return (
    <Box sx={{ p: 2, height: '630px', backgroundColor: '#1f2937'}}>
      <Box
        sx={{ backgroundColor: '#1f2937' }}
      >
        <Toolbar sx={{px: '0px !important'}}>
          <img 
            src="logo.png"
            style={{
              width: "60px",
              objectFit: "cover",
              marginRight: "10px"
            }}
          />
          <Typography
            variant="h4"
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#3ee6ef',
              textDecoration: 'none',
            }}
          >
            MusicHub
          </Typography>
        </Toolbar>
        
        {sider}

      </Box>
    </Box>
  );
}