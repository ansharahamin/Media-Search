import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {
    const [text, settext] = useState('')
    const dispatch= useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(setQuery(text))
        settext('')
    }
  return (
    <div className='h-screen text-white'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className= 'flex items-center justify-center gap-2 p-4'>
            <input value={text} onChange={(e)=>{
                
                settext(e.target.value)

            }} type="text" placeholder="Search..." className='bg-gray-800 text-white placeholder:text-gray-500 border-2 rounded text-2xl border-gray-600 focus:outline-none w-full focus:ring-2 focus:ring-gray-500 px-4 py-2' />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 active:scale-950 text-white font-bold py-2 px-4 rounded'>
                Search
            </button>
        </form>
    </div>
  )
}

export default SearchBar