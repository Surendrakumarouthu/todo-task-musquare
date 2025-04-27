import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div className="row">
      {tasks.map(task => (
        <div key={task.id} className="col-md-6 col-lg-4 mb-3">
          <TaskItem task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
