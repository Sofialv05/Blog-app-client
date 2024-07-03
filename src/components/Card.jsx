export default function Card(props) {
  const { titles } = props;
  console.log(titles);
  return (
    <>
      {titles.map((title, index) => (
        <div
          key={index}
          className="flex h-56 bg-white border border-gray-200 shadow-lg rounded-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww"
            alt="Card image"
            className="w-1/4 h-auto object-cover object-center rounded-l-lg"
          />
          <div className="p-8 w-3/4 flex flex-col">
            <h5 className="block font-bold font-gudea text-3xl text-primary mb-2">
              {title}
            </h5>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-end mt-auto">
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
      ))}
    </>
  );
}
