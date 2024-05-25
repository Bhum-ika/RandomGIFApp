import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
<div className="w-screen h-screen flex flex-col background relative overflow-x-hidden items-center">
    <h1 className="text-center w-10/12 absolute mt-[40px] bg-white rounded-md px-6 py-1 text-2xl font-bold">RANDOM GIFS</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[10px]">
      <Random/>
      <Tag/>
    </div>
    </div>
  );
}

export default App;
