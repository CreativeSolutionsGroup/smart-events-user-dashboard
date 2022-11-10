import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { PropsWithChildren, useEffect, useState } from "react"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

export const ProgressBar = ({ percent, children }: PropsWithChildren<{ percent: number }>) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {children}
      <BorderLinearProgress variant="determinate" value={percent} />
    </Box>
  );
}