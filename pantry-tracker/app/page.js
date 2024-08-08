import * as React from 'react';
import { Box, Stack } from '@mui/material';

const items = ['lettuce', 'kale', 'oranges'];

export default function Home() {
  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Stack width="100vw" height="100vh" spacing={2}>
        {items.map((i) => (
          <Box
            key={i}
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#f0f0f0"
            color="black"
          >
            {i}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
