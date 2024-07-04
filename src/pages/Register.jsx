import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      let { data } = await axios({
        method: "POST",
        url: "https://gc.sofalvsy-web.site/add-user",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          username,
          email,
          password,
          phoneNumber,
          address,
        },
      });
      console.log(data);
      navigate("/");
    } catch (err) {
      console.error(err.response?.data.message);
    }
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white transition ease-in-out duration-300 bg-primary hover:bg-sub font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
