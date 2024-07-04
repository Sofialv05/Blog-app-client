import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "../util/axios";

export default function Post() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // const token = localStorage.getItem("token");
        // const splitToken = token.split(".");
        // const payload = JSON.parse(atob(splitToken[1]));
        // // console.log(payload);
        // const authorId = payload.id;
        let { data } = await axios({
          method: "GET",
          url: "/posts",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        // data = data.filter((e) => e.AuthorId == authorId);
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
      <div className="container mx-auto my-auto h-screen">
        <Table posts={postData} />
      </div>
    </section>
  );
}
