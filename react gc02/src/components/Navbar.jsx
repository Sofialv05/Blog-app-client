import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button";

export default function Navbar() {
  const navigate = useNavigate();

  const login = () => navigate("/login");
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white flex items-center justify-center py-4 px-4 fixed top-0 right-0 left-0 shadow-md shadow-gray-500 z-10">
      <div className="flex mx-20 items-center justify-between w-full">
        <div className="flex items-center">
          <Link to={"/"} className="text-primary text-3xl font-semibold">
            Random Blog
          </Link>
        </div>
        {localStorage.getItem("token") ? (
          <ul className="flex space-x-6 text-lg font-bold text-primary ">
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
              <NavLink
                to={"/posts"}
                className={({ isActive }) =>
                  (isActive ? "text-sub lg:underline decoration-inherit" : "") +
                  "transition duration-300 ease-in-out hover:text-sub hover:underline decoration-inherit"
                }
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/categories"}
                className={({ isActive }) =>
                  (isActive ? "text-sub lg:underline decoration-inherit" : "") +
                  "transition duration-300 ease-in-out hover:text-sub hover:underline decoration-inherit"
                }
              >
                Categories
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        <div>
          {!localStorage.getItem("token") ? (
            <Button
              color={"bg-primary hover:bg-sub"}
              text={"Login"}
              handle={login}
            />
          ) : (
            <div className="flex gap-6 items-center">
              <Link
                to={"/register"}
                className="transition duration-300 ease-in-out hover:text-sub"
              >
                <Button
                  color={"bg-green-800 hover:bg-green-700"}
                  text={"Add Staff"}
                  handle={""}
                />
              </Link>
              <Button
                color={"bg-red-600 hover:bg-red-700"}
                text={"Logout"}
                handle={logout}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
