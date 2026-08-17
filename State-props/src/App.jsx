//function component`
import React, { useState } from "react";
import Hero from "./Components/Hero";
import State from "./Components/State"
import ImageGallary from "./Components/ImageGallary";
import Props from "./Components/Props";
import Music from "./Components/Music";
import Navbar from "./Components/Navbar";
function App(){
  const data=[ 
    {image:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",name:"Die For You",artist:"Weekend",added:false},
    {image:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D",name:"About You",artist:"The 1975",added:false},
    {image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"O Re Piya",artist:"Fateh Ali Khan",added:false},
    {image:"https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww",name:"Beliver",artist:"Imagine Dragons ",added:false},
    {image:"https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Heavy",artist:"The Marias",added:false},
    {image:"https://images.unsplash.com/photo-1623517272043-cae1572afc96?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Ishq",artist:"Faheem&Rauhan",added:false},
    {image:"https://plus.unsplash.com/premium_photo-1682920140924-d8b5db318d97?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Judas",artist:"Lady Gaga ",added:false},
    {image:"https://images.unsplash.com/photo-1515010137531-66995c7f40e6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Barbaad",artist:"Jubin Nautiyal",added:false},
  ];
  const [val,setVal]= useState(data);
  const handelClick=(index)=>{
    setVal((prev)=>{
      return prev.map((item,itemIndex)=>{
        if(itemIndex===index) {return{...item,added:!item.added}};
        return item;
      });
    });
  };
  return(
    <div>
     <Navbar data={val}/>
     <div className="px-20 flex gap-10 mt-10 flex-wrap">
      {val.map((obj,index)=>(
        <Music data={obj} handelClick={handelClick} index={index} />
      ))}
     </div>
     
    </div>
  );}
export default App;