import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const Search = ({ role, setLocation, setRole, location, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex items-center justify-center py-10">
        <div className="border-2 border-gray-400  py-3 px-4 rounded-l-md border-r-0 flex items-center gap-2">
          <CiSearch className="text-gray-800 font-black" size={20} />
          <input
            type="text"
            name="role"
            id=""
            className="focus:outline-none w-96 "
            placeholder="Enter your desired job role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="border-2 border-gray-400  py-3 px-4 rounded-l-none border-r-0 flex items-center gap-2">
          <CiLocationOn className="text-gray-800 font-black" size={20} />
          <input
            type="text"
            name="location"
            id=""
            className="focus:outline-none w-96"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" text-white  font-black w-24 bg-blue-600 py-3 px-2 border-2 border-blue-600 border-l-0 rounded-r-md"
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;
