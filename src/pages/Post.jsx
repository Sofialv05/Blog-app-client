import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "../util/axios";
import { Link } from "react-router-dom";

export default function Post() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let { data } = await axios({
          method: "GET",
          url: "/posts",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setPostData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="Posts">
      <div className="container mx-auto my-auto h-svh">
        <div className="pt-36 flex justify-center">
          <Link to={"/add-post"}>
            <button className="bg-primary font-medium text-md px-4 py-2 rounded-md flex shadow-md items-center text-sub3 gap-3 hover:bg-sub">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Create Post
            </button>
          </Link>
        </div>
        <Table posts={postData} />
      </div>
    </section>
  );
}
