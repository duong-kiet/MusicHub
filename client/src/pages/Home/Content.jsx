import * as React from 'react';
import Stack from '@mui/material/Stack';
import TopArtist from './TopArtist';
import TopSong from './TopSong';
import TopAlbum from './TopAlbum';

export default function Content() {
  return (
    <Stack marginTop={3}>
      <TopSong />
      <TopArtist />
      <TopAlbum />
    </Stack>
  );
}