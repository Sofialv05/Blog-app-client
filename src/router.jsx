import { createBrowserRouter, redirect } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import Post from "./pages/Post";
import PostForm from "./pages/PostForm";
import Category from "./pages/Category";
import MainLayout from "./Layout/MainLayout";
import ImageForm from "./pages/ImageForm";

const isNotLogin = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }
  return null;
};

const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return redirect("/");
  }
  return null;
};

export const router = createBrowserRouter([
  {
    loader: isLoggedIn,
    path: "/login",
    element: <Login />,
  },
  {
    loader: isNotLogin,
    path: "/register",
    element: <Register />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        loader: isNotLogin,
        path: "/posts",
        element: <Post />,
      },
      {
        loader: isNotLogin,
        path: "/add-post",
        element: <PostForm />,
      },
      {
        loader: isNotLogin,
        path: "/edit-post/:id",
        element: <PostForm />,
      },
      {
        loader: isNotLogin,
        path: "/edit-image/:id",
        element: <ImageForm />,
      },
      {
        loader: isNotLogin,
        path: "/categories",
        element: <Category />,
      },
    ],
  },
]);
