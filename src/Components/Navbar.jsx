import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-4 py-3 flex justify-between items-center'>
        <h3>Orange</h3>
        <div className='flex p-2 px-4 text-sm rounded-md gap-3 bg-orange-500 text-white'>
            <h3>Favourites</h3>
            <h2>{data.filter(item=>item.added).length}</h2>
        </div>
      
    </div>
  )
}

export default Navbar
