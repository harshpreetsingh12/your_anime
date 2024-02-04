import axios from "axios";

const BASE_URL = 'https://anime-db.p.rapidapi.com';
const options = {
  method: 'GET',
  // url:BASE_URL,
  params: {
    // page: '1',
    // size: '30',
    // search: 'Fullmetal',
    // genres: 'Fantasy,Drama',
    sortBy: 'ranking',
    sortOrder: 'asc'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_ANIME_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

export const fetchFromAPI=async(url)=>{
  console.log(`${BASE_URL}/${url}`)
  const {data}=await axios.request(`${BASE_URL}/${url}`,options);
  axios.request(`${BASE_URL}/${url}`,options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
        console.error(error);
      });
  return data;
  }