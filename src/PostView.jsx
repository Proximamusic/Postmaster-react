import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { postContext } from "./App";
import Comments from "./Comments";

function PostView() {
  const [display, setDisplay] = useState("none");
  const [comment, setComment] = useState([]);
  const postContextVal = useContext(postContext);
  const currpost =
    postContextVal.postState.post[0]?.body ||
    " <= go back and click on a comment you want to open";

  useEffect(() => {
    async function fetchComments() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = response.data;
      setComment(data);
    }

    fetchComments();
  }, []);

  function show() {
    display === "none" ? setDisplay("block") : setDisplay("none");
  }
  return (
    <div>
      <div
        onClick={show}
        className="w-3/4 h-28 bg-blue-500 rounded-md text-xl uppercase motion-reduce:animate-bounce mt-5  py-3 px-6 mr-auto ml-auto shadow-lg hover:shadow-xl text-white cursor-pointer transition-all transform hover:scale-95 hover:bg-blue-400 flex items-center"
      >
        {currpost}
      </div>

      <div style={{ display: display }} className="text-3xl">
        <h1 className="font-bold transition-all mt-11 text-2xl text-gray-500 text-center">
          Comments On This Post
        </h1>

        {comment.map(
          (item) =>
            item.postId === postContextVal.postState.post[0]?.id && (
              <Comments email={item.email} body={item.body} name={item.name} />
            )
        )}
      </div>
    </div>
  );
}

export default PostView;
