import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [showJobs, setShowJobs] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(role, location);
  };

  return (
    <JobContext.Provider
      value={{
        count,
        setCount,
        currentPage,
        setCurrentPage,
        role,
        setRole,
        location,
        setLocation,
        handleSubmit,
        isSearching,
        setIsSearching,
        showJobs,
        setShowJobs,
        allJobs,
        setAllJobs,
        pageCount,
        setPageCount,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobAuth = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
