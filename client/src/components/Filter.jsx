import { useState } from "react";
import LocationFilter from "./filters/LocationFilter";
import DateOfPostingFilter from "./filters/DateOfPostingFilter";
import WorkExperienceFilter from "./filters/WorkExperienceFilter";
import TypeOfEmployment from "./filters/TypeOfEmployment";
import SalaryFilter from "./filters/salary/SalaryFilter";
import SalaryTimeFilter from "./filters/salary/SalaryTimeFilter";
import { useJobAuth } from "../store/JobContext";

const Filter = () => {
  const {
    allJobs,
    setAllJobs,
    setShowJobs,
    setPageCount,
    currentPage,
    setCurrentPage,
  } = useJobAuth();

  const [selectedLoc, setSelectedLoc] = useState("");
  const [selectedDOP, setSelectedDOP] = useState("");
  const [selectedWEXP, setSelectedWEXP] = useState("");
  const [selectedTOE, setSelectedTOE] = useState("");
  const [selectedSalRange, setSelectedSalRange] = useState("");
  const [selectedSalTime, setSelectedSalTime] = useState("");

  const setLocationHandler = (e) => {
    setSelectedLoc(e.target.value);
  };
  const setDateOfPostingHandler = (e) => {
    setSelectedDOP(e.target.value);
  };

  const setWorkExpHandler = (e) => {
    setSelectedWEXP(e.target.value);
  };
  const setTypeOfEmplymentHandler = (e) => {
    setSelectedTOE(e.target.value);
  };
  const setSalaryRangeHandler = (e) => {
    setSelectedSalRange(e.target.value);
  };
  const setSalaryTimeHandler = (e) => {
    setSelectedSalTime(e.target.value);
  };

  // console.log(selectedLoc);
  // console.log(selectedSalRange);

  const filterJobs = () => {
    let filteredJobs;
    console.log("Inside job filter");
    if (selectedLoc) {
      filteredJobs = allJobs.filter(
        (job) => job?.jobLocation.toLowerCase() === selectedLoc
      );
    }
    if (selectedSalTime) {
      console.log(selectedSalTime);
      filteredJobs = allJobs.filter(
        (job) => job?.salaryType.toLowerCase() === selectedSalTime
      );
    }
    if (selectedSalRange) {
       filteredJobs = allJobs.filter(
        (job) => Number.parseInt(job?.maxPrice) >  Number.parseInt(selectedSalRange)
      );
    }
    if (selectedWEXP) {
      filteredJobs = allJobs.filter(
        (job) => job?.workType.toLowerCase() === selectedWEXP
      );
    }
    if (selectedTOE) {
      filteredJobs = allJobs.filter(
        (job) => job?.employmentType.toLowerCase() === selectedTOE
      );
    }
    // if (selectedLoc) {
    //   const filteredJobs = allJobs.filter(
    //     (job) => job?.jobLocation.toLowerCase() === selectedLoc
    //   );
    console.log(filteredJobs);
    setPageCount(Math.ceil(filteredJobs.length / 5));
    const lastRecordIndex =  currentPage * 5;
    const firstRecordIndex = lastRecordIndex - 5;

    const showJobs = filteredJobs?.slice(firstRecordIndex, lastRecordIndex);
    setShowJobs(showJobs);
  };

  return (
    <div className=" shadow-slate-800 pb-12  px-14">
      <h2 className="pb-4 font-bold">Filters</h2>
      <div className="flex flex-col gap-10">
        <LocationFilter
          {...{ selectedLoc, setLocationHandler, setSelectedLoc }}
        />
        <SalaryTimeFilter
          {...{ selectedSalTime, setSelectedSalTime, setSalaryTimeHandler }}
        />
        <SalaryFilter
          {...{ selectedSalRange, setSalaryRangeHandler, setSelectedSalRange }}
        />
        <DateOfPostingFilter
          {...{ selectedDOP, setSelectedDOP, setDateOfPostingHandler }}
        />
        <WorkExperienceFilter
          {...{ setSelectedWEXP, setWorkExpHandler, selectedWEXP }}
        />
        <TypeOfEmployment
          {...{ setSelectedTOE, setTypeOfEmplymentHandler, selectedTOE }}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={filterJobs}
        >
          Save Filter
        </button>
        <button
          className="-mt-8 px-2 py-2 text-blue-600 border-2 border-blue-600 bg-white rounded-md"
          onClick={() => {
            const lastRecordIndex = 5;
            const firstRecordIndex = lastRecordIndex - 5;

            const showJobs = allJobs?.slice(firstRecordIndex, lastRecordIndex);
            setPageCount(Math.ceil(allJobs.length / 5));

            setShowJobs(showJobs);
            setSelectedLoc();
            setSelectedDOP()
            setSelectedWEXP()
            setSelectedTOE()
            setSelectedSalTime()
            setSelectedSalRange()
            
          }}
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};
export default Filter;
