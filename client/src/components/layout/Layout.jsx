import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';
import Sider from './Sider'
import MainContent from './MainContent'

export default function Layout({ content }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container>
        <Grid2 size={3.8}>
          <Sider />
        </Grid2>
        <Grid2 size={8.2}>
          <MainContent content={content}/>
        </Grid2>
      </Grid2>
    </Box>
  );
}
