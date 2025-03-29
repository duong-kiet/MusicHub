import * as React from 'react';
import Stack from '@mui/material/Stack';
import TopArtist from './TopArtist';
import TopSong from './TopSong';

export default function Content() {
  return (
    <Stack marginTop={3}>
      <TopSong />
      <TopArtist />
    </Stack>
  );
}