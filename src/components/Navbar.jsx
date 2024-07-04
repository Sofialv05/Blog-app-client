import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white flex items-center justify-center py-4 px-4 fixed top-0 right-0 left-0 shadow-lg shadow-grey-700">
      <div className="flex mx-20 items-center justify-between w-full">
        <div className="flex items-center">
          <a href="#" className="text-primary text-3xl font-semibold">
            Random Blog
          </a>
        </div>
        <ul className="flex space-x-6 text-lg font-bold text-primary">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                (isActive ? "text-sub lg:underline decoration-inherit" : "") +
                "transition duration-300 ease-in-out hover:text-sub hover:underline decoration-inherit"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className=" transition duration-300 ease-in-out hover:text-sub"
            >
              Posts
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" transition duration-300 ease-in-out hover:text-sub"
            >
              Authors
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <input
            type="text"
            name="keyword"
            id="search"
            placeholder="Search..."
            className=" transition duration-150 ease-in-out block w-60 p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:outline-none focus:ring-primary focus:ring-offset-0 focus:border-primary px-4 py-2"
          />
          <div className="pl-3">
            <a href="">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
