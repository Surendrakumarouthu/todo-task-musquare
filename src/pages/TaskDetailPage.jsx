import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTasks } from "../services/api";

function TaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getTask() {
      try {
        const data = await fetchTasks();
        const singleTask = data.find(t => t.id === parseInt(id));
        if (singleTask) setTask(singleTask);
        else setError("Task not found.");
      } catch {
        setError("Error fetching task.");
      }
    }
    getTask();
  }, [id]);

  const toggleStatus = () => {
    setTask(prev => ({ ...prev, completed: !prev.completed }));
  };

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!task) return <div>Loading...</div>;

  return (
    <div className="container py-5">
      <h1 className="mb-4">Task Details</h1>
      <ul className="list-group mb-3">
        <li className="list-group-item"><strong>ID:</strong> {task.id}</li>
        <li className="list-group-item"><strong>Title:</strong> {task.title}</li>
        <li className="list-group-item"><strong>Status:</strong> {task.completed ? "Completed" : "Pending"}</li>
        <li className="list-group-item"><strong>User ID:</strong> {task.userId}</li>
      </ul>
      <button onClick={toggleStatus} className="btn btn-primary me-2">Toggle Status</button>
      <button onClick={() => navigate(-1)} className="btn btn-secondary">Go Back</button>
    </div>
  );
}

export default TaskDetailPage;
