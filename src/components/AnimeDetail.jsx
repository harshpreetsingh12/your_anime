import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import {Typography, Box, Stack} from '@mui/material';
import { fetch2 } from '../utils/fetch2.js'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'
import ReactPlayer from 'react-player'
import {Loader, SideBar, Character} from './'

const AnimeDetail = () => {
  const [videoDetail, setVideoDetail]=useState(null);
  const [videos, setVideos]=useState(null);
  const [otherkey, setOtherKey]=useState(null);
  const {id} = useParams();

    useEffect(()=>{
      fetchFromAPI(`anime/by-id/${id}`)
      .then((data)=>setVideoDetail(data))

      fetch2(`/anime/${id}/videos`)
      .then((data)=>setOtherKey(data))
    },[])
    
    console.log(otherkey)
    console.log(videoDetail)
    if (!videoDetail){ return <Loader/>}
  return (
    <Stack sx={{flexDirection:{sx: 
      "column", md:"row",backgroundColor:'#141212db;'}}}>
         <Box sx={{height:{
        sx:'auto',md:'92vh'
      }, borderRight:'1px solid #3d3d3d', px:{sx: 0, md:1}}}>
        <SideBar
        selectedCategory={''}
        setSelectedCategory={''}/>
        <Typography className='copyright'
        variant="body2" sx={{mt:1.5, color:'#fff'}}>
          Copyright 2022 Harshpreet
        </Typography>
        </Box>
      <Box p={1}  display='flex' width='90%' flexDirection='column' paddingLeft='3%' sx={{overflowY:'auto', 
    height:'92vh', flex:2}}>
      <Box width='100%' alignItems='center' display='flex' sx={{flexDirection:{sx: 
      "column", md:"row"}}} >

      <a href={videoDetail.link} target='__blank'><img width='280px' src={videoDetail.image} alt="" />
      </a>
      <Box width='70%' justifyContent='center' display='flex' flexDirection='column'>

      <Typography color='white' fontSize='28px' margin="1% 3%">{videoDetail.title}</Typography>
      <Typography color='white' fontSize='20px' margin="0% 3%">Overview</Typography>
      <Typography color='white' fontSize='18px' margin="1% 3%">{videoDetail.synopsis}</Typography>
      <Box width='100%' alignItems='center' justifyContent='center'  display='flex' flexDirection='row'>

      <Typography color='white' fontSize='18px' margin="1% 3%">Type: 
      {videoDetail.genres.map((item) => {
        return  ` ${item}`;
      })}</Typography>
      <Typography color='white' fontSize='18px' margin="1% 3%">Status: {videoDetail.status}</Typography>
      <Typography color='white' fontSize='18px' margin="1% 3%">Rank: {videoDetail.ranking}</Typography>
      </Box>
      </Box>
      </Box>
      {/* <Character char={otherkey}/> */}
      </Box>
      {/* <ReactPlayer url={`${videoDetail.link}`}className="react-player" controls/> */}


    </Stack>
  )
}

export default AnimeDetail
