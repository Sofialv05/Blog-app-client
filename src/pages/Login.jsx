import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let { data } = await axios({
        method: "POST",
        url: "https://gc.sofalvsy-web.site/login",
        data: {
          email,
          password,
        },
      });
      // console.log(data);
      localStorage.setItem("token", data.access_token);
      navigate("/register");
    } catch (err) {
      console.error(err.response?.data.message);
    }
  };

  return (
    <section id="login" className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white border-gray-200 rounded-lg shadow-black ">
        <form className="space-y-8" onSubmit={handleLogin}>
          <h5 className="text-2xl font-extrabold text-center text-primary tracking-wider">
            Sign in
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-bold text-primary"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Your Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-md font-bold text-primary "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary block w-full p-2.5"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white transition ease-in-out duration-300 bg-primary hover:bg-sub font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
