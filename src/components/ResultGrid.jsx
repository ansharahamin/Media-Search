import { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGIFs } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {
    const { query, loading, error, activeTabs, results } = useSelector((store) => store.search)
  
    useEffect(()=>{
          const getData = async () => {
        let data;
        if (activeTabs === 'photos') {
            let response = await fetchPhotos(query)
            console.log(response);
            data = response.results
            console.log(data);
        } if (activeTabs === 'videos') {
            let response = await fetchVideos(query)
            console.log(response);
            data = response.hits
            console.log(data);
            
        } if (activeTabs === 'gifs') {
            let response = await fetchGIFs(query)
            console.log(response);
            data = response.data
            console.log(data);
        }
    }
        getData()
    },[query,activeTabs])
    return (
        <div></div>
    )
}




export default ResultGrid