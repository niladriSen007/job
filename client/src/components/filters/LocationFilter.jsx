const LocationFilter = ({selectedLoc,setLocationHandler,setSelectedLoc}) => {
  // const locations = ["All","Kolkata", "Mumbai", "Delhi", "Hyderabad", "Bangalore"];
  const locations = [
    {
      label:"Kolkata",
      value:"kolkata"
    },
    {
      label:"Mumbai",
      value:"mumbai"
    },
    {
      label:"Delhi",
      value:"delhi"
    },
    {
      label:"Hyderabad",
      value:"hyderabad"
    },
    {
      label:"Bangalore",
      value:"bangalore"
    },
  ]

  return (
    <div className="">
      <h2 className="pb-2 font-bold">Location</h2>
      <form className="flex flex-col gap-2 ">
        {locations.map((location) => (
          <div key={location?.value} className="">
            <input
              type="radio"
              id={location?.value}
              name="location.value"
              value={location?.value}
              checked={selectedLoc === location?.value}
              onChange={(e)=>setLocationHandler(e)}
              className="cursor-pointer"
              
            />
            <label className="pl-1" htmlFor={location?.value}>{location?.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};
export default LocationFilter;
