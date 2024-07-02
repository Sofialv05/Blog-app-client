export default function Navbar() {
  return (
    <nav className="bg-white flex items-center justify-center py-4 px-4">
      <div className="max-w-screen-xl flex mx-auto items-center justify-between w-full">
        <div className="flex items-center">
          <a href="#" className="text-primary text-lg font-bold">
            Blog
          </a>
        </div>

        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-primary">
              Posts
            </a>
          </li>
          <li>
            <a href="#" className="text-primary">
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
            className="block w-60 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
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
