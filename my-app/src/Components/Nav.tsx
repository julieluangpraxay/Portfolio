import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="flex w-full justify-end">
          <Link to="/" className="inline-block">
            <div className="relative max-w-xs overflow-hidden">
              <img
                src="/images/home.png"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-20"
                alt=""
              />
              <h3>home</h3>
            </div>
          </Link>

          <Link to="/experience" className="inline-block">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src="/images/work.png"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-20"
                alt=""
              />
              <h3>experience</h3>
            </div>
          </Link>

          <Link to="/projects" className="inline-block">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src="/images/folder.png"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-20"
                alt=""
              />
              <h3>projects</h3>
            </div>
          </Link>
          <Link to="/aboutme" className="inline-block">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src="/images/aboutme.png"
                className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-20"
                alt=""
              />
              <h3>about me</h3>
            </div>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
