const SalaryTimeFilter = ({selectedSalTime, setSelectedSalTime, setSalaryTimeHandler}) => {
    const stime = [
        {
          label:"Hourly",
          value:"hourly"
        },
        {
          label:"Weekly",
          value:"weekly"
        },
        {
          label:"Monthly",
          value:"monthly"
        },    
        {
          label:"Yearly",
          value:"yearly"
        },    
      ]
  return (
    <div className="">
      <h2 className="pb-2 font-bold">Salary time</h2>
      <form className="flex flex-col gap-2 ">
        {stime.map((st) => (
          <div key={st.value} className="">
            <input
              type="radio"
              id={st.value}
              name="w"
              value={st.value}
              checked={selectedSalTime === st.value}
              onChange={(e)=>setSalaryTimeHandler(e)}
              className="cursor-pointer"
              
            />
            <label className="pl-1" htmlFor={st.value}>{st.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}
export default SalaryTimeFilter