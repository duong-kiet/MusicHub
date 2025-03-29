import * as React from 'react';
import Stack from '@mui/material/Stack';
import Artist from './Artist';

export default function Content() {
  return (
    <Stack marginTop={6}>
      <Artist />
    </Stack>
  );
}