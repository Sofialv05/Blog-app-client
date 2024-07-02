function Home() {
  return (
    <body className="bg-gradient-to-t from-primary to-sub h-screen">
      <nav className="bg-white border-sub flex items-center justify-between py-4 px-8">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {" "}
            <span className="text-primary text-lg font-bold">Blog</span>{" "}
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
      <section id="home" className="container mx-auto my-8 flex justify-center">
        <div className="container mx-10 my-8" id="cards">
          <div className="flex flex-wrap gap-6">
            <div className="flex max-w-max w-full h-56 bg-white border border-gray-200 shadow-lg rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww"
                alt="Card image"
                className="w-auto h-auto object-cover object-center rounded-l-lg"
              />
              <div className="p-10">
                <h5 className=" font-bold font-gudea text-3xl text-primary mb-2">
                  Card Title 1
                </h5>
                <p className="text-gray-500 font-normal font-gudea">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem dicta aperiam cum magni quod, ipsum sapiente tenetur
                  placeat totam aliquid quibusdam doloremque iste voluptatum sit
                  illo quis eligendi aliquam magnam! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officiis praesentium facilis
                  expedita, ipsum omnis molestias unde dolore.
                </p>
                <div className="flex justify-end">
                  <a
                    href="Detail.html"
                    className="inline-flex items-center justify-center bg-primary rounded-lg px-5 py-2 text-white font-medium font-gudea hover:bg-sub focus:ring-4 focus:outline-none focus:ring-sub transition ease-in-out duration-300 hover:shadow-lg"
                  >
                    Read Detail
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex max-w-max w-full h-56 bg-white border border-gray-200 shadow-lg rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww"
                alt="Card image"
                className="w-auto h-auto object-cover object-center rounded-l-lg"
              />
              <div className="p-10">
                <h5 className=" font-bold font-gudea text-3xl text-primary mb-2">
                  Card Title 1
                </h5>
                <p className="text-gray-500 font-normal font-gudea">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem dicta aperiam cum magni quod, ipsum sapiente tenetur
                  placeat totam aliquid quibusdam doloremque iste voluptatum sit
                  illo quis eligendi aliquam magnam! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officiis praesentium facilis
                  expedita, ipsum omnis molestias unde dolore. p&gt;
                </p>
                <div className="flex justify-end">
                  <a
                    href="Detail.html"
                    className="inline-flex items-center justify-center bg-primary rounded-lg px-5 py-2 text-white font-medium font-gudea hover:bg-sub focus:ring-4 focus:outline-none focus:ring-sub transition ease-in-out duration-300 hover:shadow-lg"
                  >
                    Read Detail
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
