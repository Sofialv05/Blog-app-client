import { useState } from "react";
import axios from "../util/axios";
import { useParams } from "react-router-dom";
import { SubmitButton } from "../components/Button";

export default function ImageForm() {
  //   const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null);

  useState(() => {
    const fetchImage = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: "/posts/" + id,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImage();
  }, []);

  const handleUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await axios.patch(`/posts/${id}/img`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main id="main" className="pt-28 pb-14 h-screen">
      <div className="container bg-white mx-auto flex justify-around rounded-lg flex-col h-full">
        <div
          className=" flex flex-col items-center justify-between h-1/2"
          id="content"
        >
          <h4 className="text-3xl text-primary font-bold mb-5">Upload Image</h4>
          <h4 className="text-2xl text-sub2 font-semibold">{post.title}</h4>
          <img className="w-1/3 mt-6" src={post.imgUrl} />
        </div>
        <form
          className=" flex justify-center items-center flex-col"
          onSubmit={handleUpload}
        >
          <h4 className="text-xl mb-4 text-sub font-semibold">select file:</h4>
          <div className="flex items-center gap-8 flex-col">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <SubmitButton text={"Upload File"} />
          </div>
        </form>
      </div>
    </main>
  );
}
