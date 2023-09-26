import { animateScroll as scroll } from "react-scroll";
import dvoskin from "../assets/profileImage/dvoskin.png";

const Nav_Logo = () => {
  return (
    <button onClick={() => scroll.scrollToTop({ duration: 300 })}>
      <div className="flex items-center ml-4 lg:ml-8">
        <img
          className="w-10 h-10 mr-4 rounded-full"
          src={dvoskin}
          alt="GASTÓN DVOSKIN"
        />
        <div className="flex flex-col items-start text-sm xl:flex-row lg:text-lg">
          <span className="mr-1" >GASTÓN</span>
          <span className="" >DVOSKIN</span>
        </div>
      </div>
    </button>
  );
};

export default Nav_Logo;
