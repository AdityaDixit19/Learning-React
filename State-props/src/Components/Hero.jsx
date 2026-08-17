import React from 'react'
function Hero() {
  const data=[{images:'https://images.unsplash.com/photo-1773332585754-f1436987743b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"Netflix",description:"lorem ipsum dolor sit amet, consectetur adipisicing.",stock:true},
    {
      images:'https://images.unsplash.com/photo-1779464433263-35e2c02d1cc8?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:"Pintrest",
      description:"lorem ipsum dolor sit amet, consectetur adipisicing.lorem ipsum dolor sit amet",stock:false
    },
    {
      images:"https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Amazon Basics",description:"lorem ipsum dolor sit amet, consectetur adipisicing.lorem ipsum dolor sit amet",stock:true
    },
  ]
  return (
      <div className=' w-full h-screen  bg-zinc-200 gap-10 flex items-center justify-center rounded-md overflow-hidden'>
        {data.map((data, index) => (
  <div key={index}>
    <div className="w-full h-32 bg-zinc-300 ">
      <img
        className="w-full h-full object-cover rounded-md "
        src={data.images}
        alt=""
      />
    </div>
    <div className="w-full px-2 py-2 bg-zinc-300">
      <h2 className="font-semibold">{data.name}</h2>
      <p className="text-xs mt-5 bg-zinc-400">
        {data.description}
      </p>
      <button  onClick={() => {if(!data.stock){alert("sorry out of stock")}else{alert("order placed successfully")}}} className={`w-fit px-2 rounded ${data.stock?"bg-green-600":"bg-red-600"} mt-5 font-semibold`}>{data.stock?"In Stock":"Out of Stock"}</button>
    </div>
  </div>
))}
      </div>
  )
}
export default Hero
