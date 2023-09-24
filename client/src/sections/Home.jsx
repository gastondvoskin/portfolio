import { Link } from "react-scroll";

const Home = () => {
  const NAME = "Gastón Dvoskin";
  const ROLE = "Front-end Developer";

  return (
    <section
      name="home"
      className="w-full h-screen pt-24 pb-24 bg-mybg1 dark:bg-mybg1d"
    >
      <div className="flex flex-col w-full h-full justify-center items-center text-center gap-24">        
        <h2 className="text-2xl md:text-5xl ">Welcome! My name is</h2>
        <div id="nameAndRole">
          <h1 className="text-6xl mb-2 text-myacc dark:text-myaccd md:text-7xl xl:text-9xl">{NAME}</h1>
          <h2 className="text-2xl md:text-4xl xl:text-6xl">{ROLE}</h2>
        </div>
        <Link
          className="text-2xl px-7 cursor-pointer text-myacc dark:text-myaccd md:text-xl lg:text-3xl xl:text-4xl"
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

// md:mb-16 xl:mt-16 
