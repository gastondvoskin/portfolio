import { animateScroll as scroll } from "react-scroll";
import dvoskin from "../assets/profileImage/dvoskin.png";

const Nav_Logo = () => {
  return (
    <button onClick={() => scroll.scrollToTop({ duration: 300 })}>
      <div className="flex items-center ml-16">
        <img
          className="w-10 h-10 mr-2 rounded-full"
          src={dvoskin}
          alt="GASTÓN DVOSKIN"
        />
        <span>GASTÓN DVOSKIN</span>
      </div>
    </button>
  );
};

export default Nav_Logo;
