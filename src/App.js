import "./App.css";
import Posts from "./Posts";
import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostView from "./PostView";
import SearchComponent from "./SearchComponent";

export const postContext = createContext();

const initialState = {
  post: [],
};

const reducer = (state, action) => {
 
  switch (action.type) {
    case "add-post":
      return { ...state, post: [action.item] };
    default:
      return state;
  }
};

function App() {
  const [post, setPost] = useState([]);
  const [postState, dispatch] = useReducer(reducer, initialState);
  const [postDisplay, setPostDisplay] = useState(false);
  const [inputNumber, setInputNumber] = useState(0);
  const [from , setfrom] =useState("From the Start");


  useEffect(() => {
    async function fetchPosts() {
      const request = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = request.data;
      setPost(data);
    }
    fetchPosts();
  }, []);

  return (
    <postContext.Provider value={{ postState: postState, dispatch: dispatch }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <div className="App p-8 bg-gray-100">
            <h1 className="font-bold transition-all text-5xl text-gray-500 text-center relative">
              PostMaster
              <svg
                className="w-6 h-6 absolute inset-x-1/2 -top-5  transition-all animate-bounce transform scale-125"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </h1>
            <Route exact path="/">
              <SearchComponent
                setfunc={setPostDisplay}
                displaystate={postDisplay}
                setInputNumber={setInputNumber}
                inputNumber={inputNumber}
                setfrom={setfrom}
              />

              <div style={{ display: postDisplay ? "block" : "none" }}>
                {/* {post.map((item) => (
                  <Posts post={item.body} id={item.id} />
                ))} */}

                {/* {console.log(post.slice(0,10))} */}
               {from==="All" && post.map((item) => (
                  <Posts post={item.body} id={item.id} />
                )) }

               {from==="From the Start" ? post.slice(0,inputNumber).map((item) => (
                  <Posts post={item.body} id={item.id} />
                )): post.slice(-inputNumber).map((item) => (
                  <Posts post={item.body} id={item.id} />
                ))}


              </div>
              <svg
                style={{ display: postDisplay ? "none" : "block" }}
                className="w-24 h-24 absolute transform transition-all text-gray-600 bottom-80 animate-pulse inset-x-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Route>

            <Route exact path="/post">
              <PostView />
            </Route>
          </div>
        </Switch>
      </Router>
    </postContext.Provider>
  );
}

export default App;
