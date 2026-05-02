"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const EnrollForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = form;

    if (!name || !email || !phone) {
      toast.error("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email!");
      return;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone must be 10-15 digits!");
      return;
    }

    toast.success("Enrollment Successful 🎉");

    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div className="border border-purple-200 rounded-xl p-8 shadow-sm h-fit">
      <h2 className="text-xl font-semibold text-center mb-6">
        Confirm Enrollment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

       
        <div>
          <label className="text-sm">Your Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="write your name"
            className="w-full mt-1 px-4 py-3 shadow rounded-md outline-none focus:ring-2 focus:ring-purple-400 bg-slate-50"
          />
        </div>

        
        <div>
          <label className="text-sm">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full mt-1 px-4 py-3 shadow rounded-md outline-none focus:ring-2 focus:ring-purple-400 bg-slate-50"
          />
        </div>

       
        <div>
          <label className="text-sm">Phone *</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
            className="w-full mt-1 px-4 py-3 shadow rounded-md outline-none focus:ring-2 focus:ring-purple-400 bg-slate-50"
          />
        </div>

        
        <button
          type="submit"
          className="w-full h-11 rounded-md mt-5 bg-gradient-to-r from-[#4e2ecf] to-[#a57aeb] text-white font-medium hover:scale-105 transition"
        >
          Enroll Now
        </button>
      </form>
    </div>
  );
};

export default EnrollForm;