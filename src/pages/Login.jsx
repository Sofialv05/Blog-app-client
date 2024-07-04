import axios from "../util/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let { data } = await axios({
        method: "POST",
        url: "/login",
        data: {
          email,
          password,
        },
      });
      // console.log(data);
      localStorage.setItem("token", data.access_token);
      navigate("/posts");
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
          <SubmitButton label={"Login"} />
        </form>
      </div>
    </section>
  );
}
