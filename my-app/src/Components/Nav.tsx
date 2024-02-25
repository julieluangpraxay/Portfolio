import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="bg-pink-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
