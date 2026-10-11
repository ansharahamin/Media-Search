import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const dispatch = useDispatch()
const activeTab = useSelector((state)=>state.search.activeTabs)
    const tabs = ['photos', 'videos', 'gifs']
    return (
        <div>{tabs.map((elem,idx) => {
            return <button onClick={()=>{
                dispatch(setActiveTabs(elem))
            }} className={`${activeTab === elem ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-300'},cursor-pointer p-3.5 m-2 rounded transform hover:scale-105`} key={idx}>{elem}</button>
        })}</div>
    )
}

export default Tabs