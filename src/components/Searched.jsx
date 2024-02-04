import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Typography, Box, Stack} from '@mui/material';
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'
import {Loader, Searchcard} from './'

const Searched = () => {
  const {searchTerm} = useParams();
  const [searchc, setSearchc]= useState(null)
  useEffect(()=>{
    console.log(searchTerm)
    fetchFromAPI(`anime?search=${searchTerm}&page=1&size=10`)
    .then((data)=>setSearchc(data))
  },[])
  if (!searchc) return <Loader/>
  console.log(searchc.data)
  // if ((searchc.data.length)===0) return <Typography color='white' fontSize='25px'>There is no anime with this name</Typography>
  return (
    <Box justifyContent='center' display='flex' sx={{height:{
      xs:'auto',md:'92vh'
    }, borderRight:'1px solid #3d3d3d', px:{sx: 0, md:1}}}>
    {(searchc.data.length)===0 && <Typography color='white' fontSize='25px'>There is no anime with this name</Typography>}
    <Stack direction="row" flexWrap='wrap' justifyContent='center' gap={4}>
      {searchc.data.map((item,idx)=>(
        <Box key={idx}>
            <Searchcard anime={item}/>
        </Box>
      ))}
    </Stack>
    </Box>
  )
}

export default Searched
