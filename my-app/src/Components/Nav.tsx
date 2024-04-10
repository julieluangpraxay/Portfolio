import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="w-full bg-pink-200 rounded">
        <div className="sm:flex sm:flex-wrap flex justify-center w-full">
          <Link to="/" className="inline-block mx-2">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat text-center">
              <img
                src="/images/home.png"
                className="sm:w-12 transition duration-300 ease-in-out hover:scale-110 w-10"
                alt=""
              />
              <h3 className="text-xs">home</h3>
            </div>
          </Link>
          <Link to="/experience" className="inline-block mx-2">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat text-center">
              <img
                src="/images/work.png"
                className="sm:w-12 transition duration-300 ease-in-out hover:scale-110 w-10"
                alt=""
              />
              <h3 className="text-xs">experience</h3>
            </div>
          </Link>
          <Link to="/projects" className="inline-block mx-2">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat text-center">
              <img
                src="/images/folder.png"
                className="sm:w-12 transition duration-300 ease-in-out hover:scale-110 w-10"
                alt=""
              />
              <h3 className="text-xs">projects</h3>
            </div>
          </Link>
          <Link to="/aboutme" className="inline-block mx-2">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat text-center">
              <img
                src="/images/aboutme.png"
                className="sm:w-12 transition duration-300 ease-in-out hover:scale-110 w-10"
                alt=""
              />
              <h3 className="text-xs">about me</h3>
            </div>
          </Link>
          <Link to="/contact" className="inline-block mx-2">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat text-center">
              <img
                src="/images/Mail(1).png"
                className="sm:w-12 transition duration-300 ease-in-out hover:scale-110 w-10"
                alt=""
              />
              <h3 className="text-xs">contact</h3>
            </div>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
