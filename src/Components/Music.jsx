import React from 'react'   
function Music({data,handelClick,index}) {
  const {image,artist,added,name}=data;
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 relative mt-20'>
        <div className='w-20 h-20 bg-orange-500 rounded-md overflow-hidden'>
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className=''>
            <h3 className='text-xl leading-none font-semibold '>{name}</h3>
            <h6 className='text-sm mt-1'>{artist}</h6>
        </div>
        <button onClick={()=>handelClick(index)} className={`px-2 py-2 ${added===false?"bg-orange-500":"bg-teal-500"} absolute rounded-full text-xs text-white bottom-0 left-1/2 -translate-x-1/2 mb-2`}>{added===false ? "Add to favourites":"Succesfully Added"}</button>
    </div>
  )
}
export default Music;