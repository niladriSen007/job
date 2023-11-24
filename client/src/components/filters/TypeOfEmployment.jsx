const TypeOfEmployment = ({setSelectedTOE, setTypeOfEmplymentHandler, selectedTOE}) => {
    // const toe = ["Any","Full time","Part time"]
    const toe = [
        {
          label:"Any",
          value:"any"
        },
        {
          label:"Full time",
          value:"fulltime"
        },
        {
          label:"Part time",
          value:"parttime"
        },        
        {
          label:"Internship",
          value:"internship"
        },        
      ]
  return (
    <div className="">
      <h2 className="pb-2 font-bold">Type of employment</h2>
      <form className="flex flex-col gap-2 ">
        {toe.map((t) => (
          <div key={t.value} className="">
            <input
              type="radio"
              id={t.value}
              name="t.value"
              value={t.value}
              checked={selectedTOE === t.value}
              onChange={(e)=>setTypeOfEmplymentHandler(e)}
              className="cursor-pointer"
              
            />
            <label className="pl-1" htmlFor={t.value}>{t.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}
export default TypeOfEmployment