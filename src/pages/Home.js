import React from "react";
import { FaInfoCircle, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-400 to-indigo-500 flex items-center justify-center">
      <div className="text-center w-4/5">
        <h1 className="py-3 text-4xl font-bold text-white">
          Selamat Datang di Aplikasi Kami
        </h1>
        <p className="text-xl text-gray-100">
          Silahkan memulai dengan mengeksplorasi fitur yang tersedia
        </p>
        <div className="flex justify-center mt-8">
          <button className="flex items-center bg-white text-blue-500 rounded-full py-2 px-4 shadow-lg">
            <FaPhone className="mr-2" />
            <span><Link to="/contact">Ke Halaman Kontak</Link></span>
          </button>
          <button className="flex items-center bg-white text-blue-500 rounded-full py-2 px-4 shadow-lg ml-4">
            <FaInfoCircle className="mr-2" />
            <span><Link to="/about">Ke Halaman About</Link></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
