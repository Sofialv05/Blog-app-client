import { useEffect, useState } from "react";
import { CategoryTable } from "../components/Table";
import axios from "../util/axios";
import { toast } from "react-toastify";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
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
        console.err(err);
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
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        let { data } = await axios({
          method: "GET",
          url: "/pub/posts",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setPostData(data.data);
      } catch (err) {
        console.err(err);
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
  return (
    <section id="Posts" className="container mx-auto my-auto h-screen">
      <div className="pt-36 flex justify-center">
        <CategoryTable posts={postData} categories={categories} />
      </div>
    </section>
  );
}
