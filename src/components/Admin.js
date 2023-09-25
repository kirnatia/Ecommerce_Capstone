import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">User ID</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Username</th>
            <th className="border border-gray-400 p-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-400 p-2">{user.id}</td>
              <td className="border border-gray-400 p-2">{user.email}</td>
              <td className="border border-gray-400 p-2">{user.username}</td>
              <td className="border border-gray-400 p-2">{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
