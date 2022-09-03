import React from "react";
import Buttonpost from "../atoms/buttons/Buttonpost";
import Buttonreels from "../atoms/buttons/Buttonreels";
import Buttontag from "../atoms/buttons/Buttontag";

export default function FiturIg() {
  return (
    <div className="bg-gray-100 bg-opacity-25">
      <ul
        className="flex items-center justify-center space-x-12 
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t "
      >
        <li className="flex items-center">
          <Buttonpost />
        </li>
        <li>
          <Buttonreels />
        </li>
        <li>
          <Buttontag />
        </li>
      </ul>
    </div>
  );
}
