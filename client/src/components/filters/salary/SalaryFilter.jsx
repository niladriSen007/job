const SalaryFilter = ({selectedSalRange, setSalaryRangeHandler, setSelectedSalRange}) => {
    const salRange = [
        {
          label:"> 30000",
          value:"30"
        },
        {
          label:"> 50000",
          value:"50"
        },
        {
          label:"> 80000",
          value:"80"
        },        
        {
          label:"> 100000",
          value:"100"
        },        
      ]
  return (
    <div className="">
      <h2 className="pb-2 font-bold">Salary range</h2>
      <form className="flex flex-col gap-2 ">
        {salRange.map((s) => (
          <div key={s.value} className="">
            <input
              type="radio"
              id={s.value}
              name="s.value"
              value={s.value}
              checked={selectedSalRange === s.value}
              onChange={(e)=>setSalaryRangeHandler(e)}
              className="cursor-pointer"
              
            />
            <label className="pl-1" htmlFor={s.value}>{s.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}
export default SalaryFilter