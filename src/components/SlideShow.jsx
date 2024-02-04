import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {Link} from 'react-router-dom';
import {Typography,Box, CardContent, CardMedia, cardActionAreaClasses} from '@mui/material';
import styled from "styled-components";

const SlideShow = () => {
  return (
    <Splide  options={{
        perPage:1,
        gap:"0px",
        perMove:1,
        drag: 'free',
        arrows:false,
    }}>
            <SplideSlide >
                <Card>
                <Link to={'/'}>
                <img src='https://c4.wallpaperflare.com/wallpaper/966/951/802/digital-digital-art-artwork-illustration-fantasy-art-hd-wallpaper-preview.jpg' alt='../utils/img/alter.jpg' />
                </Link>
                </Card>
            </SplideSlide>

            {/* <SplideSlide>
                <Card>
                    
            <Link to={'/'}>
                <img src='https://images2.alphacoders.com/516/516664.jpg' alt='../utils/img/alter.jpg'/>
                </Link>
                </Card>
            </SplideSlide> */}
            {/* <SplideSlide key={3}>
                <Card>
                <Link to={'/'}>
                <img src='https://wallpaperaccess.com/full/1919241.jpg' alt='../utils/img/alter.jpg'/>
                </Link>
                </Card>
            </SplideSlide> */}
    </Splide>
    
  )
}
const Card=styled.div`
border-radius:2rem;
overflow:hidden;

img{
    border-radius:2rem;
    left:0;
    width:95%;
    height:90%;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:0.9rem;
    letter-spacing: 0.050rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;
export default SlideShow
