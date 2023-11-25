import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
const REACT_APP_API = "http://localhost:5000";


const Register = () => {

    const navigateTo = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const registerUser = async() =>{
        const {data} = await axios.post(`${REACT_APP_API}/user/register`,formData)
        return data?.user
  }

  const mutation = useMutation("register",registerUser)

  const handleSubmit = (e) =>{
    e.preventDefault();
    mutation.mutate(formData)
    navigateTo("/login")
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 h-[82.9vh]">
      <h1 className="text-4xl py-6 font-bold">Register</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData?.name}
           className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-64"
           placeholder="Enter your name"
        />
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
        <input
          type="text"
          name="confirmPassword"
          onChange={handleChange}
          value={formData?.confirmPassword}
           className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-64"
           placeholder="Confirm your password"
        />
        <button
          type="submit"
          className="mt-1 bg-blue-600 text-white border-2 font-bold border-blue-600 px-4 py-2 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
