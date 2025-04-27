import React from 'react';
import { Link } from 'react-router-dom';

function TaskItem({ task, onDelete }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{task.title}</h5>
        <p className={`badge ${task.completed ? 'bg-success' : 'bg-warning'} text-light align-self-start`}>
          {task.completed ? 'Completed' : 'Pending'}
        </p>
        <div className="mt-auto">
          <Link to={`/task/${task.id}`} className="btn btn-sm btn-primary me-2">View</Link>
          <button onClick={() => onDelete(task.id)} className="btn btn-sm btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
