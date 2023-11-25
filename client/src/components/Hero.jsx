import { useState } from "react";
import Search from "./Search";

const Hero = () => {

  return (
    <section className="px-40 py-24 text-center">
      <h2 className="text-6xl font-semibold">
        Find your{" "}
        <span className="text-blue-600 font-black underline ">dream job</span>{" "}
        today.
      </h2>
      <h2 className="text-gray-500 py-2 text-xl">
        thousands of job in computer,engineering and technology are waiting for
        you.
      </h2>
      <Search />
    </section>
  );
};
export default Hero;
