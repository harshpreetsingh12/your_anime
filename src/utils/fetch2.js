import axios from "axios";

const BASE_URL='https://jikan1.p.rapidapi.com'
const options = {
    method: 'GET',
    // url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
    headers: {
      'X-RapidAPI-Key': '3e8afb70ffmshb21f5b9d2909ff2p1414ecjsn6a06b831b521',
      'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
    }
  };
  
//   axios.request(`${BASE_URL}/upcoming`,options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

    
  export const fetch2=async(url)=>{
  console.log(`${BASE_URL}${url}`)
  const {data}=await axios.request(`${BASE_URL}${url}`,options);
  console.log(data)
  return data;
  }