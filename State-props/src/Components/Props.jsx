import React from 'react'

function Props({image,name, description}) {
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-sky-200'>
            <img  className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className='w-full p-3'>
            <h3 className='font-semibold'>Name:{name}</h3>
            <h5 className='font-semibold '>Profession: {description}</h5>
            <button onClick={() => alert("Friend Added")} className=' mt-2 px-3 py-1 test-xs text-white bg-blue-500 font-semibold rounded-md'>Add Friend</button>
        </div>
    </div>
  )
} 
export default Props
{/* props use hote hau appke components ko reusable bnane ke liye. consider karo appke pss ek button hai and uuse tumhe alg alg jagah dalna hai app me toh aap ek button compbanaye aur uska data hardcoded krne ki jagah parent component se send karde and child component par use kar le  */}