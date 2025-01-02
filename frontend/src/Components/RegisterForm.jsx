import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/api/user/register",
      formData
    );
    alert("Register successful! Now You can Login");
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    window.location.href = "/";
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-teal-900 via-teal-700 to-teal-500">
      <div className="relative bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 w-full max-w-sm p-8 rounded-xl shadow-2xl">
        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
          <div className="w-40 h-12 bg-gradient-to-b from-teal-400 rounded-lg hover:bg-teal-600 flex items-center justify-center shadow-lg border-4 border-gray-700">
            <h2 className="text-xl font-bold text-white">Register</h2>
          </div>
        </div>
        <div className="text-center mt-12">
          <div className="w-24 h-24 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-800 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c2.485 0 4.5-1.567 4.5-3.5S14.485 4 12 4s-4.5 1.567-4.5 3.5S9.515 11 12 11zM16.5 13.5a9 9 0 11-9 0m9 0H6m6 0V21"
              />
            </svg>
          </div>
        </div>
        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {/* Date of Birth */}
          <input
            type="date"
            required
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {/* Role Dropdown */}
          <select
            required
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="" disabled selected>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="publisher">Publisher</option>
            <option value="modifier">Modifier</option>
            <option value="reviewer">Reviewer</option>
          </select>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none shadow-lg"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <a
            href="/"
            className="text-sm text-teal-300 hover:underline focus:underline"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
