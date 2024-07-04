import axios from "../util/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: "/pub/posts/" + id,
    })
      .then(({ data }) => {
        console.log(data);
        setPostData(data);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, [id]);

  return (
    <main id="main" className="bg-gradient-to-t from-primary to-sub3 h-screen">
      <div className="container bg-white mx-auto flex justify-center rounded-lg flex-col h-full">
        <div className="container mx-10 my-8" id="content">
          <h2 className="text-4xl">{postData.title}</h2>
          <img src={postData.imgUrl} alt={postData.title} />
        </div>
        <di className="px-28">
          <p className="text-justify">{postData.content}</p>
        </di>
      </div>
    </main>
  );
}
