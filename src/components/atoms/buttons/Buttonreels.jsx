import React from "react";
import Reelsicon from "../icons/Reelsicon";

export default function Buttonreels() {
  return (
    <div>
      <button className="flex items-center p-3" href="#">
        <Reelsicon />
        <span className="uppercase ml-2">Reels</span>
      </button>
    </div>
  );
}
