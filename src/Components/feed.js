import React from 'react'
import { Box } from '@mui/material';
import Post from './Posts';
const feed = () => {
  return (
    <Box  flex={4} p={2}>
      <Post/>
    </Box>
  )
}

export default feed
