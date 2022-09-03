import React from "react";
import Posticon from "../icons/Posticon";

export default function Buttonpost() {
  return (
    <div className="flex items-center">
      <button className="flex items-center p-3" href="#">
        <Posticon />
        <span className="uppercase ml-2">post</span>
      </button>
    </div>
  );
}
