import { useState } from "react";

export default function TaskCard({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    onEdit(task._id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between p-2 mb-2 border">
      {isEditing ? (
        <input
          className="p-1 border"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
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
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-500">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button className="text-red-500" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
