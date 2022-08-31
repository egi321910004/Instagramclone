import React from "react";

export default function PostIg() {
  return (
    <div className="bg-gray-100 bg-opacity-25">
      <div class="container grid grid-cols-3 gap-2 mx-auto">
        <div class="w-full ">
          <img
            className="object-cover w-full h-1/2"
            src="/images/egi1.jpeg"
            alt="profile"
          />
        </div>
        <div class="w-full ">
          <img
            className="object-cover w-full h-1/2"
            src="/images/egi3.jpg"
            alt="profile"
          />
        </div>
        <div class="w-full ">
          <img
            className="object-cover w-full h-1/2"
            src="/images/egiegi.jpeg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}
