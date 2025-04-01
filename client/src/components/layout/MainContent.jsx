import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from './AppBar';
import PageContent from './PageContent';

export default function MainContent({ content }) {
  return (
    <Box sx={{ p: '20px 24px', height: '630px', backgroundColor: '#111827' , overflowY: 'scroll'}}>
      <AppBar />
      <PageContent content={content}/>
      {console.log(content)}
    </Box>
  );
}