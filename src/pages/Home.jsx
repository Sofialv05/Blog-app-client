import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "../util/axios";

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
        setLoading(false);
      });
  }, []);

  return (
    <section id="home" className=" bg-gradient-to-t from-primary to-sub3">
      <div className="container mx-auto pt-28 flex justify-center">
        <div className="container mx-10 my-8" id="cards">
          <div className="flex flex-col justify-center gap-6">
            {loading ? <p>Loading...</p> : <Card posts={postData} />}
          </div>
        </div>
      </div>
    </section>
  );
}
