import React from "react";
import Activityicon from "../atoms/icons/Activityicon";
import Fipeople from "../atoms/icons/Fipeople";
import Homeicon from "../atoms/icons/Homeicon";
import Messengericon from "../atoms/icons/Messengericon";
import Newposticon from "../atoms/icons/Newposticon";
import Profilenavicon from "../atoms/icons/Profilenavicon";
import Instagramlogo from "../atoms/Instagramlogo";
import Searchbox from "../atoms/Searchbox";

export default function Navbar() {
  return (
    <div className="h-16 bg-white border-b border-gray-primary">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <Instagramlogo />
          <Searchbox />
          <Homeicon />
          <div className="flex flex-row-reverse space-x-5 space-x-reverse items-center">
            <Messengericon />
            <Newposticon />
            <Fipeople />
            <Activityicon />
            <Profilenavicon />
          </div>
        </div>
      </div>
    </div>
  );
}
