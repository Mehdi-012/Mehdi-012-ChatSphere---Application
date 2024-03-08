
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className='flex flex-col w-full h-full m-auto p-auto  justify-center items-center'>
        <h1 className='text-2xl text-indigo-400 p-6 m-6'>
          Welcome to ChatSphere
        </h1>
        <p className='w-1/2 p-6 m-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste maiores enim unde delectus consequatur hic quidem cum ab. Rerum ducimus nobis iste repudiandae blanditiis quisquam aspernatur minima dignissimos id!
          
        </p>
        <div className='bg-indigo-400 rounded p-3 text-white'> <Link to={"join"}>Join chat</Link> </div>
     </div>
    </>
  );
}

export default App;
