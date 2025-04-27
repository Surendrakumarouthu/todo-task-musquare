import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTaskPage() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      completed: status,
      userId: 1,
    };
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value === "true")}
          >
            <option value={false}>Pending</option>
            <option value={true}>Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">Add Task</button>
      </form>
    </div>
  );
}

export default AddTaskPage;
