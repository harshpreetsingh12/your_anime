import React from 'react'
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import {logo} from '../utils/constants'
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack zIndex="1" direction="row" 
    alignItems="center"
    p={2} 
    sx={{position:'sticky', background:'#000',top:0,justifyContent:'space-between'}}>
      <Link to="/" style={{ display:'flex', alignitems:'center',marginLeft:'20px'}} >
        <img src={logo} alt="logo" height={55}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar
