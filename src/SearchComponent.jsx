import React, { useRef, useState } from "react";

function SearchComponent(props) {


  function sendInput() {
    props.setfunc(!props.displaystate);
    
  }
  return (
    <div className="w-3/5 mx-auto mt-8 mb-11 h-24 px-5 flex items-center justify-between  bg-white rounded-md shadow-2xl">
      <input
        onChange={(e) => {
          props.setInputNumber(Number(e.target.value));
        }}
        className="h-20 rounded-md  font-bold px-2 py-3 outline-none text-2xl flex-1"
        placeholder="Enter Number of posts"
        type="number"
      />
      <select onChange={(e)=>props.setfrom(e.target.value)} className=" font-bold mr-3" name="Number of comments">
        <option value="From the Start">From Start</option>
        <option value="From the End">From the End</option>
        <option value="All">All</option>
      </select>
      <button
        onClick={sendInput}
        className=" bg-blue-500 px-6 py-4 rounded-sm transition-all hover:bg-gray-400  shadow-xl "
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchComponent;
