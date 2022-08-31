import React from "react";

export default function Profiledeskripsi() {
  return (
    <div className="bg-gray-100 bg-opacity-25 h-full">
      <div className="w-8/12 mx-auto">
        <div className="flex flex-wrap items-center p-8">
          {/* Foto Profile */}
          <img
            className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1 ml-32 mt-16"
            src="/images/eginew.png"
            alt="profile"
          />
          {/* Follower atau tentang profile */}
          <div className="w-8/12 ml-28 mt-8  ">
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
              <button
                className="p-1 ml-2 text-gray-700 border-transparent rounded-full  "
                aria-label="Notifications"
              >
                <svg
                  className="w-7 h-7 content-center  "
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
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
              <p className="text-blue-800">#Hacktiv8 #MSIB3</p>
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
