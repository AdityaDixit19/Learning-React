import { useRef } from "react";

function App() {
  const name = useRef("null");
  const age =useRef('null');
  const SubmitFunction=(details)=>{
    details.preventDefault();
    console.log(name.current.value,age.current.value);
  }
  return (
    <form action="" onSubmit={SubmitFunction}>
      <input type="text" placeholder="name" ref={name} />
      <input type="text" placeholder="age" ref={age} />
      <button className="p-2 rounded-md text-white bg-zinc-400">Submit</button>
    </form>
  );
}
export default App;


// UseRef= iss tarike me ham har input ko select kar lete hai and unki value tab nikaalte hai jab form submit hota hai 
//useref ke through kisi bhi html input ko select kr skte ho