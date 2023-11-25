import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useJobAuth } from "../store/JobContext";
const REACT_APP_API = "http://localhost:5000";

const Login = () => {
  const { user, setUser } = useJobAuth();

  const navigateTo = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginUser = async () => {
    const { data } = await axios.post(`${REACT_APP_API}/user/login`, formData);
    setUser(data?.user);
    console.log(data?.user)
    return data?.user;
  };

  const mutation = useMutation("login", loginUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
    navigateTo("/");
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 h-[82.9vh]">
      <h1 className="text-4xl py-6 font-bold">Login</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formData?.email}
          className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-64"
          placeholder="Enter your email"
        />
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={formData?.password}
          className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-64"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="mt-1 bg-blue-600 text-white border-2 font-bold border-blue-600 px-4 py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
