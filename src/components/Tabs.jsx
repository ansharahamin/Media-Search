import React from 'react'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gifs']
    return (
        <div>{tabs.map((elem,idx) => {
            return <button className='bg-gray-600 px-5 rounded  uppercase py-4 active:scale-95 cursor-pointer' key={idx}>{elem}</button>
        })}</div>
    )
}

export default Tabs