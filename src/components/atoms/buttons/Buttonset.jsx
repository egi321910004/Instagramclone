import React from "react";
import Settingicon from "../icons/Settingicon";

export default function Buttonset() {
  return (
    <button
      className="p-1 ml-2 text-gray-700 border-transparent rounded-full  "
      aria-label="Notifications"
    >
      <Settingicon />
    </button>
  );
}
