'use client';
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/contact', {
      method: "POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData)
    });

    const {msg} = await res.json();
    alert(msg);

    setFormData({
      name:"",
      email:"",
      message:""
    })
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 w-full max-w-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
        <input value={formData.name} onChange={handleInputChange} type="text" id="name" name="name" placeholder="Enter your name..." className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
        <input value={formData.email} onChange={handleInputChange} type="email" id="email" name="email" placeholder="Enter your email..." className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
        <textarea value={formData.message} onChange={handleInputChange} id="message" name="message" placeholder="Enter your message..." rows="3" className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer">Send</button>
    </form>
  )
}
