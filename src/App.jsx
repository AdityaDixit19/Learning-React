//function component`
import React from "react";
import Hero from "./Components/Hero";
import State from "./Components/State"
import ImageGallary from "./Components/ImageGallary"
import Props from "./Components/Props"
function App(){
  const data=[
    {name:"Aditya",description:"Coder",images:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Vishal",description:"Painter",images:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Tushar",description:"Athlete",images:"https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  ]
  return(
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {data.map((data,index)=>(
        <Props image={data.images} name={data.name} description={data.description}/>
      ))}
    </div>
  );
}
export default App;