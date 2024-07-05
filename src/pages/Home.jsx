import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "../util/axios";
import { toast } from "react-toastify";

export default function Home() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/pub/posts",
    })
      .then(({ data }) => {
        // console.log(data);
        setPostData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
        toast.error(err.response?.data.message || err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    setLoading(false);
  }, []);

  return (
    <section id="home" className="">
      <div className="container mx-auto pt-28 flex justify-center">
        <div className="container mx-10 my-8" id="cards">
          <div className="flex items-center gap-20 mb-10 justify-end">
            <div className="flex items-center gap-2">
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
          <div className="flex flex-col justify-center gap-6">
            {loading ? <p>Loading...</p> : <Card posts={postData} />}
          </div>
        </div>
      </div>
    </section>
  );
}
