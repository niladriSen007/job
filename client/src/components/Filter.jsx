import { useState } from "react";
import LocationFilter from "./filters/LocationFilter";
import DateOfPostingFilter from "./filters/DateOfPostingFilter";
import WorkExperienceFilter from "./filters/WorkExperienceFilter";
import TypeOfEmployment from "./filters/TypeOfEmployment";
import SalaryFilter from "./filters/salary/SalaryFilter";
import SalaryTimeFilter from "./filters/salary/SalaryTimeFilter";

const Filter = () => {
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
  console.log(selectedSalRange);
  return (
    <div className=" shadow-slate-800 pb-12  px-14">
      <h2 className="pb-4 font-bold">Filters</h2>
      <div className="flex flex-col gap-10">
        <LocationFilter
          {...{ selectedLoc, setLocationHandler, setSelectedLoc }}
        />
        <SalaryTimeFilter {...{ selectedSalTime, setSelectedSalTime, setSalaryTimeHandler }}/>
        <SalaryFilter {...{ selectedSalRange, setSalaryRangeHandler, setSelectedSalRange }}/>
        <DateOfPostingFilter
          {...{ selectedDOP, setSelectedDOP, setDateOfPostingHandler }}
        />
        <WorkExperienceFilter
          {...{ setSelectedWEXP, setWorkExpHandler, selectedWEXP }}
        />
        <TypeOfEmployment
          {...{ setSelectedTOE, setTypeOfEmplymentHandler, selectedTOE }}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Save Filter</button>
      </div>
    </div>
  );
};
export default Filter;
