import { Link } from "react-router-dom"


const logo = "../images/jobImg.png"

const Navbar = () => {

  return (
    <div>
        <nav className="flex items-center justify-between px-72 h-16 shadow-lg">
            <Link to={"/"}><img src={logo} alt="job_portal" className="w-24 h-24"/></Link>
            <div className="flex list-none items-center justify-between gap-12 font-semibold text-gray-500 ">
                <Link to={"#"} className="cursor-pointer hover:text-blue-500 transition-all duration-300 text-lg">Start a search</Link>
                <li className="cursor-pointer hover:text-blue-500 transition-all duration-300 text-lg">My jobs</li>
                <li className="cursor-pointer hover:text-blue-500 transition-all duration-300 text-lg">Salary Estimate</li>
                <Link to={"/postJob"} className="cursor-pointer hover:text-blue-500 transition-all duration-300 text-lg">Post a job</Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <button className="bg-transparent border-2 border-blue-500 text-blue-600 font-bold px-4 py-1 rounded-md">Login</button>
                <button className="bg-blue-600 text-white border-2 font-bold border-blue-600 px-4 py-1 rounded-md">Signup</button>
            </div>
        </nav>
    </div>
  )
}
export default Navbar