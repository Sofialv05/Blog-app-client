import axios from "../util/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../components/Button";
import { toast } from "react-toastify";

export default function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios({
        method: "POST",
        url: "/add-user",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: newUser,
      });
      navigate("/login");
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

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <section id="login" className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white border-gray-200 rounded-lg shadow-black ">
        <form className="space-y-8" onSubmit={handleRegister}>
          <h5 className="text-2xl font-extrabold text-center text-sub tracking-wider">
            Sign up
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-bold text-sub"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-sub focus:border-sub block w-full p-2.5"
              placeholder="Username"
              value={newUser.username}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-bold text-sub"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-sub focus:border-sub block w-full p-2.5"
              placeholder="Email"
              required=""
              value={newUser.email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-md font-bold text-sub "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-sub focus:border-sub block w-full p-2.5"
              required=""
              value={newUser.password}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-md font-bold text-sub "
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-sub focus:border-sub block w-full p-2.5"
              value={newUser.phoneNumber}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-md font-bold text-sub "
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-sub focus:border-sub block w-full p-2.5"
              value={newUser.address}
              onChange={handleChangeInput}
            />
          </div>
          <SubmitButton text={"Register"} />
        </form>
      </div>
    </section>
  );
}
