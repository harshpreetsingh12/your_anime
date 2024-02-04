import React from 'react'
import { SideBar, Animes ,SlideShow , Loader} from './'
import { useState, useEffect } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'
import { fetch2 } from '../utils/fetch2.js'


const Feed = () => {
  const [selectedCategory, setSelectedCategory]=useState('')
  const [anime,setAnime]=useState([]);

  // if (selectedCategory==='Home'){setSelectedCategory('')}
  useEffect(()=>{
    fetchFromAPI(`anime?page=1&size=60`)
    .then((data)=>setAnime(data.data))
  },[selectedCategory])
  //   fetch2(`/top/anime/1/upcoming`)
  //   .then((data)=>setAnime(data.top))
  // },[selectedCategory])
  // useEffect(()=>{
    //   fetchFromAPI(`anime?search=${selectedCategory.toLowerCase()}`)
    //   .then((data)=>setAnime(data.data))
    // },[selectedCategory])
    
  
    // console.log(anime)
  return (
<Stack sx={{flexDirection:{sx: 
    "column", md:"row",backgroundColor:'#141212db;'}}}>
     <Box sx={{height:{
        sx:'auto',md:'92vh'
      }, borderRight:'1px solid #3d3d3d', px:{sx: 0, md:1}}}>
        <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright'
        variant="body2" sx={{mt:1.5, color:'#fff'}}>
          Copyright 2022 Harshpreet
        </Typography>
        </Box>
      <Box p={1} sx={{overflowY:'auto', 
    height:'92vh', flex:2}}>
        {selectedCategory==="" && <SlideShow />}
        {/* <Typography varient="h4" fontWeight="bold" mb={2} fontSize="1.5rem" sx={{
          color:'white'
        }}>{selectedCategory}
          <span style={{color:'#f31503',paddingLeft:'5px'}} >/</span>

        </Typography> */}

          <Animes anime={anime}/>

      </Box>
    </Stack>
  )
}

export default Feed
