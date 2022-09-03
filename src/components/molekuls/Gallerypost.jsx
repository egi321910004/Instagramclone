import React from "react";

export default function Gallerypost() {
  return (
    <div className="container grid grid-cols-3 gap-2 mx-auto">
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
  );
}
