import React, { useState } from "react";

function State() {
  const [score, setScore] = useState({ name: "Aditya", isBanned: false });
  const val = () => {
    setScore({ ...score, isBanned: !score.isBanned });
  };
  return (
    <div className="p-4">
      <h1>Name: {score.name}</h1>
      <h2>Banned: {score.isBanned.toString()}</h2>{" "}
      {/* html doesn't support boolean so we use string conversion */}
      <button
        onClick={val}
        className={` mt-2 px-3 py-1 rounded-full ${score.isBanned ? "bg-red-600" : "bg-green-600"} `}
      >
        change
      </button>
    </div>
  );
}

export default State;
{/*state ek data hota hai, react is data ka khayal rkhta hai, jab bhi ye data change hota hai react page ko update krta hai 
jo bhi data hame future me change krna hai wo ham state me de detet hai aur jab future me data change hota hai toh react hamre liye wo change kr deta hai   

usestate state ko turant update nahi krta, wo usestate ko update krta apne hisab se to fix performance issues
*/}

