import axios from "axios";
// import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
const REACT_APP_API = "http://localhost:5000";
import { useQuery, useQueryClient } from "react-query";

const Jobs = () => {
  // const queryClient = useQueryClient()

  const fetchProducts = async () => {
    const { data } = await axios.get(`${REACT_APP_API}/jobs/getJobs`);
    console.log(data?.jobs);
    return data?.jobs;
  };

  const { isLoading, error, data } = useQuery("products", fetchProducts);

  //   useEffect(() => {
  //     const fetchJobFunc = async () => {
  //       const { data } = await axios.get(`${REACT_APP_API}/jobs/getJobs`);
  //       console.log(data?.jobs);
  //     };
  //     fetchJobFunc();
  //   }, []);
  return (
    <div className="flex-1 ">
      {data?.map((job) => (
        <div key={job._id} className=" flex gap-6 pb-12 h-30 cursor-pointer hover:scale-[1.02] transition-all duration-300">
          <div className="rounded-md">
            <img src={job?.companyLogo} alt="logo" className=" object-contain  rounded-md w-32 h-32 cursor-pointer"/>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">{job?.companyName}</span>
            <span className="text-lg font-bold leading-relaxed">
              {job?.jobTitle}
            </span>
            <div className="flex gap-3 text-gray-400 text-sm">
              <span className="flex items-center gap-1 ">
                {" "}
                <CiLocationOn className="font-bold text-gray-600" />{" "}
                {job?.jobLocation?.at(0).toUpperCase()}
                {job?.jobLocation
                  ?.split(job?.jobLocation?.at(0))
                  ?.at(1)
                  .toLowerCase()}
              </span>

              <span className="flex items-center gap-1"><IoMdTime className="font-bold text-gray-600" />{job?.employmentType}</span>

              <div>
                <span>${job?.minPrice}k</span>
                <span> - </span>
                <span>${job?.maxPrice}k</span>
              </div>
              <span className="flex items-center gap-1"><SlCalender className="font-bold text-gray-600" />{job?.postingDate}</span>
            </div>
            <span className="text-gray-500 text-sm">{job?.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Jobs;
