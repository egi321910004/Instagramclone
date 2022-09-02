import React from "react";

export default function Searchbox() {
  return (
    <div className="flex items-center w-full">
      <input
        className="ml-72 search-bar max-w-md border rounded-md bg-gray-200 px-5 py-1
     outline-none focus:border-gray-400"
        type="search"
        placeholder="Search"
      ></input>
    </div>
  );
}
