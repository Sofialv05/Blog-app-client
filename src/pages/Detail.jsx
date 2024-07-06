import axios from "../util/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDate from "../util/formatDate";
import { toast } from "react-toastify";

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
      });
  }, [id]);

  return (
    <main id="main" className="pt-28 pb-14 h-screen">
      <div className="container bg-white mx-auto flex justify-around rounded-lg flex-col h-full">
        <div
          className="container flex flex-col items-center justify-between h-1/2"
          id="content"
        >
          <h4 className="text-3xl text-primary font-bold">{postData.title}</h4>
          <img
            className="w-auto mt-10"
            src={postData.imgUrl}
            alt={postData.title}
          />
        </div>
        <div className="px-28">
          <p className="text-justify">{postData.content}</p>
        </div>
        <p className="self-end mr-10 text-gray-500">
          Published At: {formatDate(postData.createdAt)}
        </p>
      </div>
    </main>
  );
}
