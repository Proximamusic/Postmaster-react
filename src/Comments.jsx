import React from "react";

function Comments({ name, body, email }) {
  return (
    <>
      <div className="flex flex-col mt-9 text-xl bg-white font-mono px-10 py-7 shadow-2xl">
        <span className=" mt-4 text-lg">
          {" "}
          <label htmlFor="" className="mr-2">
            Name:
          </label>
          {name}
        </span>
        <span className=" mt-4 mb-4 text-lg">
          <label htmlFor="" className="mr-2">
            E-mail:
          </label>
          {email}
        </span>
        <label htmlFor="" className="mr-2">
          Comment:
        </label>
        <q className=" mt-4">{body}</q>
      </div>
    </>
  );
}

export default Comments;
