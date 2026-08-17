
import { useForm } from "react-hook-form";
function App() {
  const{register,handleSubmit}=useForm();
  return (
    <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
      <input {...register("name")} type="text" placeholder="name" />
      <input {...register("age")} type="text" placeholder="age"  />
      <button className="p-2 rounded-md text-white bg-zinc-400">Submit</button>
    </form>
  );
}
export default App;
