import React from 'react'
import {Typography, Box, Stack,CardMedia} from '@mui/material'; 

const Character = ({char}) => {
  console.log(char.episodes)
    // if (!(char.episode)) return console.log('No Episodes')
    // <Typography color='white' fontSize='20px' margin="0 auto">No Episodes available!!</Typography>
  return (
     <Box display='flex' flexDirection='column' margin='25px 0'>
    {((char.episodes)!==0) && <Typography fontSize='30px' color='white' margin='20px 0' alignItems='center' justifyContent='center' >Episodes</Typography>}
  
    <Stack direction="row" flexWrap='wrap' justifyContent='center' gap={3}>
    {char.episodes.map((item,idx)=>(
        <Box key={idx}>
          <a href={item.url} target="__black">
            <CardMedia
            image={item.image_url}
            sx={{width:{
          xs:'40vw' , sm:'180px',md:'180px'
        },height:'200px'}}>
        </CardMedia>
          </a>
        <Typography color='white' fontSize='15px' margin="0 auto">{item.episode}</Typography>
        <Typography color='white' fontSize='15px' margin="0 auto">{item.title.slice(0,20)}..</Typography>
        </Box>
      ))}
    </Stack>
    </Box>
  )
}

export default Character
