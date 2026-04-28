export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between p-2 mb-2 border">
      <span
        onClick={() => onToggle(task)}
        className={
          task.status === "Completed"
            ? "line-through cursor-pointer"
            : "cursor-pointer"
        }
      >
        {task.title}
      </span>

      <button className="text-red-500" onClick={() => onDelete(task._id)}>
        Delete
      </button>
    </div>
  );
}
