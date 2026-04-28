import { useEffect, useState } from "react";
import API from "../api/axios";
import TaskCard from "../components/TaskCard";
import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await API.put(`/tasks/${task._id}`, {
      status: task.status === "Pending" ? "Completed" : "Pending",
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <MainLayout>
      <h1 className="mb-4 text-2xl">Dashboard</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="p-2 border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
        />
        <button className="p-2 text-white bg-blue-500" onClick={addTask}>
          Add
        </button>
      </div>

      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </MainLayout>
  );
}
