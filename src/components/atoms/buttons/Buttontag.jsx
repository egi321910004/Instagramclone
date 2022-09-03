import React from "react";
import Tagicon from "../icons/Tagicon";

export default function Buttontag() {
  return (
    <div>
      <botton className="flex items-center p-3" href="#">
        <Tagicon />
        <span className="uppercase ml-2">tagged</span>
      </botton>
    </div>
  );
}
