import { useEffect, useState } from "react";
import { SubmitButton } from "../components/Button";
import { Input, InputLarge } from "../components/Input";
import axios from "../util/axios";
import { useNavigate, useParams } from "react-router-dom";
import Select from "../components/Select";

export default function PostForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [post, setPost] = useState({});
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    imgUrl: "",
    CategoryId: "",
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let { data } = await axios({
          method: "GET",
          url: "/categories/",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let { data } = await axios({
          method: "GET",
          url: "/posts/" + id,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setPost(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    id && fetchPosts();
  }, [id]);

  const handleCreatePost = async (event) => {
    event.preventDefault();
    try {
      let { data } = await axios({
        method: id ? "PUT" : "POST",
        url: id ? `/posts/${id}` : "/posts",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: newPost,
      });
      console.log(data);
      navigate("/posts");
    } catch (err) {
      console.error(err);
    }
  };

  // const handleEditPost = async (event) => {
  //   event.preventDefault();
  //   try {
  //     let { data } = await axios({
  //       method: "PUT",
  //       url: "/posts/" + id,
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //       data: newPost,
  //     });
  //     console.log(data);
  //     navigate("/posts");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  return (
    <form
      className="max-w-sm mx-auto h-screen pt-28"
      onSubmit={handleCreatePost}
    >
      <h1 className="text-center font-bold text-2xl text-gray-700 mb-5">
        {id ? "Update Post" : "Create Post"}
      </h1>
      <Input
        label={"Title"}
        name={"title"}
        value={post.title}
        onChange={handleChangeInput}
      />
      <Input
        label={"Image URL"}
        name={"imgUrl"}
        value={post.imgUrl}
        onChange={handleChangeInput}
      />
      <Select
        categories={categories}
        categoryId={post.CategoryId}
        onChange={handleChangeInput}
      />
      <InputLarge
        label={"Content"}
        name={"content"}
        value={post.content}
        onChange={handleChangeInput}
      />
      <SubmitButton text={!id ? "Create Post" : "Update Post"} />
    </form>
  );
}
