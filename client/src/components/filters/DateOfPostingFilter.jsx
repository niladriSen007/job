const DateOfPostingFilter = ({selectedDOP,setSelectedDOP,setDateOfPostingHandler}) => {

  // const dop = ["All time","Last 24 hours", "Last 7 days", "Last Month"];
  const dop = [
    {
      label:"Last 24 hours",
      value:"last24hours"
    },
    {
      label:"Last 7 days",
      value:"last7days"
    },
    {
      label:"Last Month",
      value:"lastmonth"
    },
    
  ]
  return (
    <div className="">
    <h2 className="pb-2 font-bold">Date of posting</h2>
    <form className="flex flex-col gap-2 ">
      {dop.map((d) => (
        <div key={d?.value} className="">
          <input
            type="radio"
            id={d.value}
            name="d.value"
            value={d.value}
            checked={selectedDOP === d.value}
            onChange={(e)=>setDateOfPostingHandler(e)}
            className="cursor-pointer"
            
          />
          <label className="pl-1" htmlFor={d.value}>{d.label}</label>
        </div>
      ))}
    </form>
  </div>
  )
}
export default DateOfPostingFilter