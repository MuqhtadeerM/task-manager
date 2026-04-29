import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold tracking-wide">TaskFlow</h1>
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm opacity-90">Hi, {user.name}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-indigo-50 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
