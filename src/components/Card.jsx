export default function Card(props) {
  const { posts } = props;

  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex h-56 bg-white border border-gray-200 shadow-lg rounded-lg"
        >
          <img
            src={post.imgUrl}
            alt="Card image"
            className="w-1/4 h-auto object-cover object-center rounded-l-lg"
          />
          <div className="p-8 w-3/4 flex flex-col">
            <h5 className="block font-bold font-gudea text-3xl text-primary mb-2">
              {post.title}
            </h5>
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
