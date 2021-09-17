import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { postContext } from "./App";

function Posts({ post, id }) {
  const postContextVal = useContext(postContext);
  function handleClick() {
    postContextVal.dispatch({
      type: "add-post",
      item: { id: id, body: post },
    });
  }
  return (
    <Link to="/post">
      <div
        onClick={handleClick}
        className="w-max h-16 bg-blue-400 rounded-md text-lg box-content mt-5  py-3 px-6 mr-auto ml-auto shadow-lg hover:shadow-xl text-white cursor-pointer transition-all transform hover:scale-95 hover:bg-blue-500 flex items-center"
      >
        <svg
          className="w-6 h-6 transform scale-150 mr-3 hover:rotate-90 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {post.slice(0, 70) + "..."}
      </div>
    </Link>
  );
}

export default Posts;
