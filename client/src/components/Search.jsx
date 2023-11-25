import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useJobAuth } from "../store/JobContext";
const Search = () => {
  const {
    role,
    setLocation,
    setRole,
    location,
    handleSubmit,
    setIsSearching,
    showJobs,
    setShowJobs,
    allJobs,
    setAllJobs,
    pageCount,
    setPageCount,
    currentPage,
    setCurrentPage,
    count,
    setCount,
  } = useJobAuth();

  const searchJobs = async () => {
    let filteredJobs;
    if (role && location) {
      let filteredByRoleJobs = await allJobs?.filter((job) =>
        job.jobTitle.toLowerCase().includes(role.toLowerCase())
      );
      filteredJobs = await filteredByRoleJobs?.filter((job) =>
        job.jobLocation.toLowerCase().includes(location.toLowerCase())
      );
    } else if (role)
      filteredJobs = await allJobs?.filter((job) =>
        job.jobTitle.toLowerCase().includes(role.toLowerCase())
      );
    else if (location)
      filteredJobs = await allJobs?.filter((job) =>
        job.jobLocation.toLowerCase().includes(location.toLowerCase())
      );
    else if (!role && !location) filteredJobs = allJobs;
    console.log(filteredJobs?.length);

    if (filteredJobs.length === 0) {
      console.log("Filtered 0")
      setCount(false);
      setShowJobs()
    }
    else {
      setCount(true);
      const lastRecordIndex = 5;
      const firstRecordIndex = lastRecordIndex - 5;

      const showJobs = filteredJobs?.slice(firstRecordIndex, lastRecordIndex);

      const pgCount = filteredJobs
        ? Math.ceil(filteredJobs?.length / 5)
        : Math.ceil(allJobs?.length / 5);
      setPageCount(pgCount);
      setShowJobs(showJobs);
    }
  };

  // if(role === "")
  //   setPageCount(allJobs/5)

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
          className=" text-white  font-black w-32 bg-blue-600 py-3 px-2 border-2 border-blue-600 border-l-0 rounded-r-md"
          onClick={searchJobs}
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;
