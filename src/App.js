import React from 'react'
import {Navbar, Feed,AnimeDetail, Searched} from './components'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
       <Navbar/>
        <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/AnimeDetail/:id" element={<AnimeDetail/>}/>
            {/* <Route path="/channel/:id" element={<ChannelDetail/>}/> */}
            <Route path="/search/:searchTerm" element={<Searched/>}/>
        </Routes>
    </Box>
    </BrowserRouter>
)

export default App
