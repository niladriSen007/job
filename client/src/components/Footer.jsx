import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="h-16 mt-6 bg-blue-700 flex items-center justify-between text-white list-none px-72 overflow-x-hidden">
        <li className="flex items-center gap-1"><FaCopyright />{currentYear} copyright & reserved</li>
        <div className="flex items-center gap-8  font-bold">
          <li className="cursor-pointer">About</li>
          <li> | </li>
          <li className="cursor-pointer">Register</li>
          <li> | </li>
          <li className="cursor-pointer">Contact us</li>
          <li> | </li>
          <li className="cursor-pointer">Careers</li>
          <li> | </li>
          <li className="cursor-pointer">Email</li>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
