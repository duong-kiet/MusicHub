import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 2,
  width: 480,
  margin: 'auto',
  borderRadius: 5,
  marginTop: '10px',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

export default function ProgressBar({value}) {
  return (
    <BorderLinearProgress variant="determinate" value={value} />
  );
}