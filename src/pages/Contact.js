import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Proses pengiriman pesan atau validasi formulir dapat dilakukan di sini
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className={`px-4 py-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400 ${errors.name ? "ring-red-500" : ""}`}
              placeholder="Masukkan Nama Anda"
            />
            {errors.name && <span className="text-red-500">Nama harus diisi</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ })}
              className={`px-4 py-2 border border-gray-400 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400 ${errors.email ? "ring-red-500" : ""}`}
              placeholder="Masukkan Email Anda"
            />
            {errors.email && <span className="text-red-500">Email harus diisi dengan format yang valid</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              className={`px-4 py-2 border border-gray-400 rounded-md w-full h-32 focus:outline-none focus:ring focus:ring-blue-400 ${errors.message ? "ring-red-500" : ""}`}
              placeholder="Tulis Pesan Anda"
            ></textarea>
            {errors.message && <span className="text-red-500">Pesan harus diisi</span>}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
