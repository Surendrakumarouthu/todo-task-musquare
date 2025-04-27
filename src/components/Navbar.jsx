import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white shadow-md">
      <h1 className="text-2xl font-bold font-weight-bold">Task Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline "  style={{textDecoration:'none',color:'white'}}>Dashboard</Link>
        <Link to="/add-task" style={{textDecoration:'none',color:'black'}} className="bg-white text text-blue-600 px-3 py-1 rounded hover:bg-blue-100">Add Task</Link>
      </div>
    </nav>
  );
}

