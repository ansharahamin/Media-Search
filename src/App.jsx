import React from 'react'
import {fetchPhotos, fetchVideos,fetchGIFs} from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
const App = () => {

  return (
    <div className='h-screen w-full bg-gray-950 text-white flex flex-col items-center justify-center gap-4'>
<SearchBar/>
<Tabs/>
    </div>
  )
}

export default App