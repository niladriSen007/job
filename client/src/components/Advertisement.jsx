const Advertisement = () => {
  return (
    <div className=" px-8 w-64 flex flex-col gap-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold">Email us for jobs</h2>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          voluptatibus delectus soluta, modi nisi 
        </p>
        <input className="w-40 my-2 border-gray-300 border px-2 rounded-sm focus:outline-none text-sm" type="text" name="" id="" placeholder="name@email.com"/>
        <button className="px-3 py-1 text-white rounded-md bg-blue-600">Subscribe</button>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold">Get noticed faster</h2>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          voluptatibus delectus soluta, modi nisi 
        </p>
        <input className="w-40 my-2 border-gray-300 border px-2 rounded-sm focus:outline-none text-sm" type="text" name="" id="" placeholder="name@email.com"/>
        <button className="px-3 py-1  text-white rounded-md bg-blue-600">Upload your resume</button>
      </div>
    </div>
  );
};
export default Advertisement;
