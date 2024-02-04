import React from 'react'
import {AnimeCard , Loader} from './';

import {Stack, Box} from '@mui/material';
const Animes = ({anime}) => {
  if(!anime?.length) return <Loader />;
  return (
    <Stack direction="row" flexWrap='wrap' justifyContent='center' gap={4}>
      {anime.map((item,idx)=>(
        <Box key={idx}>
            <AnimeCard anime={item}/>
        </Box>
      ))}
    </Stack>
  )
}

export default Animes
