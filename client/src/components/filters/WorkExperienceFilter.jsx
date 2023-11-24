const WorkExperienceFilter = ({selectedWEXP,setWorkExpHandler}) => {
//   const wexp = ["Remote", "In office", "Hybrid"];
  const wexp = [
    {
      label:"Remote",
      value:"remote"
    },
    {
      label:"In office",
      value:"inoffice"
    },
    {
      label:"Hybrid",
      value:"hybrid"
    },    
  ]

  return (
    <div className="">
      <h2 className="pb-2 font-bold">Work Type</h2>
      <form className="flex flex-col gap-2 ">
        {wexp.map((w) => (
          <div key={w.value} className="">
            <input
              type="radio"
              id={w.value}
              name="w"
              value={w.value}
              checked={selectedWEXP === w.value}
              onChange={(e)=>setWorkExpHandler(e)}
              className="cursor-pointer"
              
            />
            <label className="pl-1" htmlFor={w.value}>{w.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}
export default WorkExperienceFilter