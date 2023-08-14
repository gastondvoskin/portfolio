import { Link } from "react-scroll";

import { nameDvoskin } from "../data/dataDvoskin/dataContact";
import { nameRovaletti } from "../data/dataRovaletti/dataContact";

const Home = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const name = dataOwner === "dvoskin" ? nameDvoskin : nameRovaletti;

  return (
    <section
      name="home"
      className="w-full h-screen pt-24 pb-24 bg-mybg1 dark:bg-mybg1d"
    >
      <div className="flex flex-col w-full h-full justify-center items-center ">
        {/* <h1 className="text-8xl pt-24 text-orange-800 m-60 text-center">PORTFOLIO UNDER CONSTRUCTION</h1> */}
        
        <h3 className="text-md mb-10 md:text-5xl md:mb-16 xl:mt-16 ">
          Welcome! My name is
        </h3>
        <h1 className={`${dataOwner==="dvoskin" ? "text-4xl" : "text-3xl"} mb-2 text-myacc dark:text-myaccd md:text-7xl xl:text-9xl`}>{name}</h1>
        <h2 className="text-xl mb-32 md:text-4xl xl:text-6xl">Full-stack web developer</h2>
        <Link
          className="text-md px-7 cursor-pointer text-myacc dark:text-myaccd md:text-xl lg:text-3xl xl:text-4xl"
          to="about"
          smooth={true}
          duration={300}
        >
          Click to know about me!
        </Link>
      </div>
    </section>
  );
};

export default Home;
