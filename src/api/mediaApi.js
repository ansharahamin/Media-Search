import axios from 'axios';
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const UNSPLASH_SECRET_KEY = import.meta.env.VITE_UNSPLASH_SECRET_KEY;
const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query,page=1,per_page=20){
 const res = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_SECRET_KEY}`}
 })
 
return res.data

}
export async function fetchVideos(query,page=1,per_page=20){
    const res = await axios.get('https://pixabay.com/api/videos/',{
        params:{key:PIXABAY_KEY,q:query,page,per_page},
    })
    return res.data
}
export async function fetchGIFs(query,limit=20){
    const res = await axios.get('http://api.giphy.com/v1/gifs/search',{
        params:{q:query,api_key:GIPHY_KEY,limit},
    })
    return res.data
}