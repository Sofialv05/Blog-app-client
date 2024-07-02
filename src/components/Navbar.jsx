export default function Navbar() {
  return (
    <nav className="bg-white border-sub flex items-center justify-between py-4 px-8">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-primary text-lg font-bold">Blog</span>
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-primary">
              Home
            </a>
          </li>
        </ul>
        <div className="flex flex-1 ml-4 space-x-4 justify-between">
          <input
            type="text"
            name="keyword"
            id="search"
            placeholder="Search..."
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
          <div className="flex items-center pl-3 pointer-events-none px-4 py-2">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
