const TaskCard = ({ task, onToggle, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-start justify-between gap-4 hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.status === "Completed"}
          onChange={() => onToggle(task)}
          className="mt-1 w-4 h-4 accent-indigo-600 cursor-pointer"
        />
        <div>
          <p
            className={`font-medium ${
              task.status === "Completed"
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {task.title}
          </p>
          {task.description && (
            <p className="text-sm text-gray-500 mt-0.5">{task.description}</p>
          )}
          <span
            className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full font-medium ${
              task.status === "Completed"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-400 hover:text-red-600 text-sm shrink-0 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
