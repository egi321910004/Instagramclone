import React from "react";
import FiturIg from "../components/organisme/FiturIg";
import Footer from "../components/organisme/Footer";
import Navbar from "../components/organisme/Navbar";
import PostIg from "../components/organisme/PostIg";
import Profiledeskripsi from "../components/organisme/Profiledeskripsi";

export default function ProfilePage() {
  return (
    <div>
      <Navbar />
      <Profiledeskripsi />
      <FiturIg />
      <PostIg />
      <Footer />
    </div>
  );
}
