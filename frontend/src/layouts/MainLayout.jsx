import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="p-4">{children}</div>
    </>
  );
}
