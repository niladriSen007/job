import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const REACT_APP_API = "http://localhost:5000";

const MyJobs = () => {
  const [allMyJobs, setAllMyJobs] = useState();
  const [appliedAllJobs, setAppliedAllJobs] = useState([]);

  const fetchMyJobs = async () => {
    const { data } = await axios.get(`${REACT_APP_API}/myJobs`);
    // console.log(data?.jobs)
    // const {data : job} = await axios.get(`${REACT_APP_API}/jobs/getJob/${data?.jobs?._id}`);
    // console.log(job?.job)
    setAllMyJobs(data?.jobs);
    return data?.jobs;
  };

  //   console.log(allMyJobs)

  const { isLoading, error, data } = useQuery("fetchAppliedJobs", fetchMyJobs);

  const fetchJob = async (id) => {
    // console.log("Inside fetch job")
    const { data } = await axios.get(`${REACT_APP_API}/jobs/getJob/${id}`);
    console.log(data?.job);
    setAppliedAllJobs(prev=>{
        return [
            ...prev,
            data?.job
        ]
    });
  };

  console.log(appliedAllJobs);

  useEffect(() => {
    // console.log("In use effect",data)
    const fetchJobAfterTimeout = setTimeout(() => {
      data?.map((j) => {
        console.log(j);
        fetchJob(j?.jobId);
      });
    }, 3000);

    return () => clearTimeout(fetchJobAfterTimeout);
  }, []);

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="px-80">
      {appliedAllJobs?.map((appliedJob) => (
        <div key={appliedJob?._id} className="flex items-center gap-4">
          <img
            src={appliedJob?.companyLogo}
            alt=""
            className="object-contain w-48 h-24"
          />
          <div className="">
            <p className="text-sm font-bold">{appliedJob?.companyName}</p>
            <p className="text-sm ">{appliedJob?.jobTitle}</p>
            <div className="flex gap-4">
              <p className="text-sm ">{appliedJob?.jobLocation}</p>
              <p className="text-sm ">
                ${appliedJob?.minPrice} - ${appliedJob?.maxPrice}
              </p>
              <p className="text-sm ">{appliedJob?.workType}</p>
            </div>
          </div>
          <button className="bg-red-500 text-white px-6 ml-16">Delete</button>
        </div>
      ))}
    </div>
  );
};
export default MyJobs;
