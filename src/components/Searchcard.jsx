import React from 'react'
import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia, cardActionAreaClasses} from '@mui/material';
import {AnimeDetail} from './'

const Searchcard = ({anime}) => {
    console.log(anime)
  return (
    <Card sx={{height:{ xs:'96vw',sm:'358px', md:'330px'}, boxShadow:'none',borderRadius:0}}>
        <Link to={`/AnimeDetail/${anime._id}`}>
        <CardMedia
            image={anime?.image}
            sx={{height:{
          xs:'96vw' , sm:'358px',md:'330px'
        },width:'250px'}}>
        </CardMedia>
        </Link>
    </Card>
  )
}
export default Searchcard;