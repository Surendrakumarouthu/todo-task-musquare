import { render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";
import { BrowserRouter } from "react-router-dom";

test("renders task item correctly", () => {
  const task = { id: 1, title: "Test Task", completed: false };
  render(
    <BrowserRouter>
      <TaskItem task={task} />
    </BrowserRouter>
  );
  
  expect(screen.getByText("Test Task")).toBeInTheDocument();
  expect(screen.getByText("Pending")).toBeInTheDocument();
});
