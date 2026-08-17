import { useState} from "react";
function App() {
  const[val, setVal] = useState({name:"", age:""});
  const SubmitFunction=(details)=>{
    details.preventDefault();
    console.log(val);
  }
  return (
    <form action="" onSubmit={SubmitFunction}>
      <input onChange={(e)=>{setVal({...val,name:e.target.value})}} type="text" placeholder="name"/>
      <input onChange={(e)=>{setVal({...val,age:e.target.value})}} type="text" placeholder="age"/>
      <button className="p-2 rounded-md text-white bg-zinc-400">Submit</button>
    </form>
  );
}
export default App;
// controlled components ==> aap jabhi kuch likhe usestate ke through data real time me update kr dein 
// jaise hi kuch type ho setState krdo nayi value ke barabaar 