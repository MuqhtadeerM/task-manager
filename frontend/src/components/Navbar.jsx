import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex justify-between p-4 text-white bg-gray-800">
      <h1 className="font-bold">Task Manager</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
