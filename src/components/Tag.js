import React from 'react';
import { useState } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';
const Tag = () => {

 const[tag,setTag]=useState('car');
 const{gif,loading,fetchData}=useGif(tag);
  function clickHandler(){
  fetchData(tag);
  }
  function changeHandler(e){
 setTag(e.target.value);
  }
    return (
        <div className='bg-blue-400 border border-black rounded-lg w-1/2  flex flex-col items-center mt-[1rem] gap-y-5'>
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'> Random {tag} Gif</h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="450" alt='gif'/>)
      }
      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={changeHandler} value={tag}
      />
      <button className="w-10/12 bg-yellow-200 text-lg py-2 rounded-lg mb-[20px]"onClick={clickHandler}>
        Generate
      </button>

        </div>
    );
}

export default Tag;
