import React from "react";
import Buttonset from "../atoms/buttons/Buttonset";
import Buttonsetting from "../atoms/buttons/Buttonsetting";
import Instagramfoto from "../atoms/Instagramfoto";
import Follower from "../molekuls/Follower";
import Profiletext from "../molekuls/Profiletext";

export default function Profiledeskripsi() {
  return (
    <div className="bg-gray-100 bg-opacity-25 h-full">
      <div className="w-8/12 mx-auto">
        <div className="flex flex-wrap items-center p-8">
          <Instagramfoto />
          <div className="w-8/12 ml-28 mt-8  ">
            <div className="mb-4">
              <h2 className="text-3xl inline-block font-light ">
                egiramadani_
              </h2>
              <Buttonsetting />
              <Buttonset />
            </div>
            <ul class="hidden md:flex space-x-8 mb-4">
              <Follower />
            </ul>
            <Profiletext />
          </div>
        </div>
      </div>
    </div>
  );
}
