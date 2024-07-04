import { useEffect, useState } from "react";
import { CategoryTable } from "../components/Table";
import axios from "../util/axios";

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
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

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
    <section id="Posts" className="container mx-auto my-auto">
      <div className="pt-36 flex justify-center">
        <CategoryTable posts={postData} categories={categories} />
      </div>
    </section>
  );
}
