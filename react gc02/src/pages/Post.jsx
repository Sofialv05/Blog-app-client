import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import axios from "../util/axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Post() {
  const [categories, setCategories] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let { data } = await axios({
          method: "GET",
          url: "/categories",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setCategories(data);
      } catch (err) {
        console.error(err);
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
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        let { data } = await axios({
          method: "GET",
          url: "/posts",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setPostData(data);
      } catch (err) {
        console.error(err);
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
      }
    }
    fetchPosts();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this post!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4682A9",
        cancelButtonColor: "#dc2626",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios({
          method: "DELETE",
          url: "/posts/" + id,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        window.location.reload();
      }
    } catch (err) {
      console.error(err);
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
    }
  };

  return (
    <section id="Posts" className="container mx-auto my-auto">
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
      <Table
        posts={postData}
        categories={categories}
        onDelete={handleDeletePost}
      />
    </section>
  );
}
