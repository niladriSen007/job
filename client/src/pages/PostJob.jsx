import axios from "axios";
import { useState } from "react";
import { useMutation, QueryClient } from "react-query";
const REACT_APP_API = "http://localhost:5000";

const PostJob = () => {
  const queryClient = new QueryClient();

  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    companyLogo: "",
    minPrice: "",
    maxPrice: "",
    salaryType: "",
    jobLocation: "",
    postingDate: "",
    workType: "",
    employmentType: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const postJob = async () => {
    const { data } = await axios.post(
      `${REACT_APP_API}/jobs/postJob`,
      formData
    );
    console.log(data?.job);
    return data?.job;
  };

  const mutation = useMutation(postJob);

  const handlePostJob = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
    console.log("Job Posted");
    setTimeout(() => {
      setFormData({
        companyName: "",
        jobTitle: "",
        companyLogo: "",
        minPrice: "",
        maxPrice: "",
        salaryType: "",
        jobLocation: "",
        postingDate: "",
        workType: "",
        employmentType: "",
        description: "",
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 h-[82.9vh]">
      <p className="text-4xl py-8 font-bold">Post your job</p>
      <form className="flex flex-col gap-3" onSubmit={handlePostJob}>
        <div className="flex items-center gap-4">
          <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-64"
            type="text"
            name="companyName"
            onChange={handleChange}
            value={formData?.companyName}
            placeholder="Enter your company name"
          />
          <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-60"
            type="text"
            name="jobTitle"
            onChange={handleChange}
            value={formData?.jobTitle}
            placeholder="Enter your job title"
          />
        </div>
        <input
          className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 "
          type="text"
          name="companyLogo"
          onChange={handleChange}
          value={formData?.companyLogo}
          placeholder="Paste your company logo"
        />
        <div className="flex items-center gap-4">
          <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-40"
            type="text"
            name="minPrice"
            onChange={handleChange}
            value={formData?.minPrice}
            placeholder="Enter min salary"
          />
          <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-40"
            type="text"
            name="maxPrice"
            onChange={handleChange}
            value={formData?.maxPrice}
            placeholder="Enter max salary"
          />
          {/* <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-40"
            type="text"
            name="salaryType"
            onChange={handleChange}
            value={formData?.salaryType}
            placeholder="Salary Type (per hour, per month)"
          /> */}
          <div>
            <select
              id="salaryType"
              name="salaryType"
              value={formData?.salaryType}
              onChange={handleChange}
              className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-40 text-gray-600"
            >
              <option value="">Select salary type</option>
              <option value="hourly">Hourly</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-64"
            type="text"
            name="jobLocation"
            onChange={handleChange}
            value={formData?.jobLocation}
            placeholder="Enter your job location"
          />
          <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-60"
            type="text"
            name="postingDate"
            onChange={handleChange}
            value={formData?.postingDate}
            placeholder="Enter job posting date(DD/MM/YYYY)"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-64"
            type="text"
            name="workType"
            onChange={handleChange}
            value={formData?.workType}
            placeholder="Enter work type (full time, part time, freelance)"
          /> */}

          <div>
            <select
              id="workType"
              name="workType"
              value={formData?.workType}
              onChange={handleChange}
              className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 text-gray-600 w-60"
            >
              <option value="">Select work type</option>
              <option value="inoffice">Office</option>
              <option value="hybrid">Hybrid</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div>
            <select
              id="employmentType"
              name="employmentType"
              value={formData?.employmentType}
              onChange={handleChange}
              className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2  text-gray-600  w-64"
            >
              <option value="">Select employment type</option>
              <option value="fulltime">Full time</option>
              <option value="parttime">Part time</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          {/* <input
            className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 w-60"
            type="text"
            name="employmentType"
            onChange={handleChange}
            value={formData?.employmentType}
            placeholder="Enter employment type (contract, permanent)"
          /> */}
        </div>
        <textarea
          className="border-gray-400 focus:outline-none px-2 py-1 rounded-md border-2 "
          type="text"
          name="description"
          onChange={handleChange}
          rows={4}
          cols={24}
          value={formData?.description}
          placeholder="Enter job description...."
        />
        <button
          type="submit"
          className="mt-1 bg-blue-600 text-white border-2 font-bold border-blue-600 px-4 py-2 rounded-md"
        >
          Post your job
        </button>
      </form>
    </div>
  );
};
export default PostJob;
