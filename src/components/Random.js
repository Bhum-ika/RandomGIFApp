import React from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
const Random = () => {
  const { gif, loading, fetchData } = useGif();
  function clickHandler() {
    fetchData();
  }
  return (
    <div className="bg-green-400 border border-black rounded-lg w-1/2  flex flex-col items-center mt-[6rem] gap-y-5">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" alt="gif" />}

      <button
        className="w-10/12 bg-yellow-200 text-lg py-2 rounded-lg mb-[20px]"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
