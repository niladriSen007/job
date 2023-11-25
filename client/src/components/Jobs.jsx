import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
const REACT_APP_API = "http://localhost:5000";
import { useQuery, useQueryClient } from "react-query";
import Pagination from "./Pagination";
import { useJobAuth } from "../store/JobContext";
import { Link } from "react-router-dom";

const Jobs = () => {
  const {
    role,
    location,
    setIsSearching,
    isSearching,
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
    user,
  } = useJobAuth();

  const [recordsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  const lastRecordIndex = currentPage * recordsPerPage;
  const firstRecordIndex = lastRecordIndex - recordsPerPage;
  // const queryClient = useQueryClient()

  const fetchJobs = async () => {
    console.log("In use Query");
    const { data } = await axios.get(`${REACT_APP_API}/jobs/getJobs`);
    console.log(data?.jobs);
    // const paginationJobs = data?.jobs;

    const nPages = Math.ceil(data?.jobs?.length / recordsPerPage);
    setPageCount(nPages);
    setAllJobs(data?.jobs);
    return data?.jobs;
  };

  const { isLoading, error, data } = useQuery("jobs", fetchJobs);

  useEffect(() => {
    console.log("In useEfect ");
    // if (isSearching) {
    //   let filteredJobs = data?.jobs?.filter((job) => job?.jobTitle.toLowerCase()?.includes(role.toLowerCase()));
    //   console.log("In filter jobs")
    //   setShowJobs(filteredJobs);
    // }else{

    setTimeout(() => {
      setLoading(false);
      const currentRecords = data?.slice(firstRecordIndex, lastRecordIndex);
      setShowJobs(currentRecords);
    }, 1000);
  }, [firstRecordIndex, lastRecordIndex, data, isSearching, role]);

  //   useEffect(() => {
  //     const fetchJobFunc = async () => {
  //       const { data } = await axios.get(`${REACT_APP_API}/jobs/getJobs`);
  //       console.log(data?.jobs);
  //     };
  //     fetchJobFunc();
  //   }, []);

  // useEffect(() => {
  //   if (isSearching) {
  //     let filteredJobs = allJobs?.filter((job) => job?.jobTitle?.includes(role));
  //     console.log("In filter jobs")
  //     setShowJobs(filteredJobs);
  //   }
  // }, [isSearching, role]);

  if (isLoading || loading) return <p>Loading jobs...</p>;
  if (error) return <p>Error</p>;
  if (data)
    return (
      <div className="flex-1 flex flex-col gap-16">
        {!count && <p className="text-black font-bold">No Results Found!</p>}
        {showJobs?.map((job) => (
          <Link
            to={`/job/${job?._id}`}
            key={job._id}
            className=" flex gap-6 h-30 cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >
            <div className="rounded-md">
              <img
                src={job?.companyLogo}
                alt="logo"
                className=" object-contain  rounded-md w-32 h-32 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between pr-16">
                <span className="text-sm font-semibold">
                  {job?.companyName}
                </span>
                {user?.isAdmin && (
                  <Link to={`/job/edit/${job?._id}`} className="font-bold">Edit Job</Link>
                )}
              </div>
              <span className="text-lg font-bold leading-relaxed">
                {job?.jobTitle}
              </span>
              <div className="flex gap-3 text-gray-400 text-sm">
                <span className="flex items-center gap-4 ">
                  {" "}
                  <CiLocationOn className="font-bold text-gray-600" />{" "}
                  {job?.jobLocation?.at(0).toUpperCase()}
                  {job?.jobLocation
                    ?.split(job?.jobLocation?.at(0))
                    ?.at(1)
                    .toLowerCase()}
                </span>

                <span className="flex items-center gap-1">
                  <IoMdTime className="font-bold text-gray-600" />
                  {job?.employmentType}
                </span>

                <div>
                  <span>${job?.minPrice}k</span>
                  <span> - </span>
                  <span>${job?.maxPrice}k</span>
                </div>
                <span className="flex items-center gap-1">
                  <SlCalender className="font-bold text-gray-600" />
                  {job?.postingDate}
                </span>
              </div>
              <span className="text-gray-500 text-sm leading-relaxed">
                {job?.description}
              </span>
            </div>
          </Link>
        ))}
        <Pagination
          {...{
            currentPage,
            setCurrentPage,
            pageCount: pageCount ? pageCount : 3,
          }}
        />
      </div>
    );
};
export default Jobs;
