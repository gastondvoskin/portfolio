import { Link } from "react-scroll";

import { nameDvoskin } from "../data/dataDvoskin/dataContact";
import { nameRovaletti } from "../data/dataRovaletti/dataContact";

const Home = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const name = dataOwner === "dvoskin" ? nameDvoskin : nameRovaletti;

  return (
    <main
      name="home"
      className="flex flex-col w-full h-screen items-center pt-16 pb-16 bg-mybg1 dark:bg-mybg1d"
    >
      <div className="flex flex-col w-full h-full justify-center items-center ">
        {/* <h1 className="text-6xl text-orange-800 m-60">PORTFOLIO UNDER CONSTRUCTION</h1> */}
        
        <h3 className="mb-8 text-5xl mt-32">
          Welcome! My name is
        </h3>
        <h1 className="mb-1 text-9xl text- text-myacc dark:text-myaccd">{name}</h1>
        <h2 className="mb-32 text-7xl">Full-stack web developer</h2>
        <Link
          className="px-7 cursor-pointer text-3xl text-myacc dark:text-myaccd"
          to="about"
          smooth={true}
          duration={500}
        >
          Click to know about me!
        </Link>



      </div>
    </main>
  );
};

export default Home;
