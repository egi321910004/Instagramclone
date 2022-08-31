import React from "react";

export default function Profiledeskripsi() {
  return (
    <div className="bg-gray-100 bg-opacity-25 h-full">
      <div className="w-8/12 mx-auto mb-8">
        <div className="flex flex-wrap items-center p-8">
          {/* Foto Profile */}
          <img
            className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1 ml-32 mt-16"
            src="/images/eginew.png"
            alt="profile"
          />
          {/* Follower atau tentang profile */}
          <div className="w-8/12 ml-28 mt-8 ">
            <div className="mb-4">
              <h2 className="text-3xl inline-block font-light ">
                egiramadani_
              </h2>
              <button
                href="#"
                class="px-2 py-2 ml-4
                        text-black font-semibold border text-sm rounded text-center 
                        sm:inline-block"
              >
                Edit Profile
              </button>
            </div>
            <ul class="hidden md:flex space-x-8 mb-4">
              <li>
                <span class="font-semibold">3</span>
                posts
              </li>

              <li>
                <span class="font-semibold">3,258</span>
                followers
              </li>
              <li>
                <span class="font-semibold">1,108</span>
                following
              </li>
            </ul>
            <div class="hidden md:block">
              <h1 class="font-semibold text-1xl">Egi Rizki Ramadani</h1>
              <span>React and React Navtive</span>
              <p>Quiz 4 </p>
            </div>
          </div>
          <div class="md:hidden text-sm my-2">
            <h1 class="font-semibold">Mr Travlerrr...</h1>
            <span>Travel, Nature and Music</span>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
