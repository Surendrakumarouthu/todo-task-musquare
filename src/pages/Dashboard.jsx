import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../services/api';
import TaskItem from '../components/TaskItem';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks()
      .then(data =>{
        setTasks(data); // Set tasks in the state
        console.log(`Total Tasks: ${data.length}`); // Log task count to the console
      }) // Show only 20 tasks for neatness
      .catch(() => setError('Failed to fetch tasks. Please try again.'));
  }, []);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="container my-5">
    <h1 className="text-center mb-4 text-bold fs-2" style={{ color: "black" }}>📋 Task Management Dashboard</h1>
      <div className="d-flex justify-content-center mb-4 gap-2">
        <button className="btn btn-primary" onClick={() => setFilter('all')}>All</button>
        <button className="btn btn-success" onClick={() => setFilter('completed')}>Completed</button>
        <button className="btn btn-warning" onClick={() => setFilter('pending')}>Pending</button>
        <Link to="/add-task" className="btn btn-outline-primary">➕ Add Task</Link>
      </div>

      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row">
        {filteredTasks.map(task => (
          <div className="col-md-6 col-lg-4 mb-4" key={task.id}>
            <TaskItem task={task} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
