import React from 'react'
import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia, Box} from '@mui/material';
import {AnimeDetail} from './'

const AnimeCard = ({anime}) => {
    // console.log(anime)
  return (
    <Box 
    sx={{
      height:{
        xs:'51vw' , sm:'378px',md:'350px'
      },width:{
        xs:'150px', sm:'200px',md:'200px'
      },boxShadow:'none',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center'
    }}>
      <Link to={`/AnimeDetail/${anime._id}`}>
      <CardContent sx={{display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center', color:"#fff"}}  padding='0px'>
        <CardMedia
            image={anime?.image}
            sx={{height:{
          xs:'50vw' , sm:'358px',md:'330px'
        },width:{
          xs:'150px', sm:'200px',md:'200px'
        }}}/>
        
        <Typography color='white' fontSize='15px' marginBottom="5px">{anime.title.slice(0,20)}..</Typography>
      </CardContent>
        </Link>
    </Box>
  )
}

export default AnimeCard
