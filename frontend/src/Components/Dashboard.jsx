import React, { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/getAllUsers"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">User Dashboard</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border border-gray-300 text-left">Avatar</th>
              <th className="p-4 border border-gray-300 text-left">Name</th>
              <th className="p-4 border border-gray-300 text-left">
                Created Date
              </th>
              <th className="p-4 border border-gray-300 text-left">Role</th>
              <th className="p-4 border border-gray-300 text-left">Status</th>
              <th className="p-4 border border-gray-300 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="p-4 border border-gray-300">
                    <img
                      src={
                        user.avatar ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSojQqfjNmcixb8aJOEyuoaYg1cGZHl0moww&s"
                      }
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="p-4 border border-gray-300">{user.name}</td>
                  <td className="p-4 border border-gray-300">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 border border-gray-300">{user.role}</td>
                  <td className="p-4 border border-gray-300">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded ${
                        user.status === "active"
                          ? "bg-green-100 text-green-600"
                          : user.status === "inactive"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {user.status
                        ? user.status.charAt(0).toUpperCase() +
                          user.status.slice(1)
                        : "Unknown"}
                    </span>
                  </td>
                  <td className="p-4 border border-gray-300">
                    <div className="flex items-center gap-4">
                      <button className="text-gray-500 hover:text-gray-700">
                        <IoSettings />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <ImCancelCircle />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-gray-500 p-4 border border-gray-300"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
