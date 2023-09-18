import { animateScroll as scroll } from "react-scroll";

const Nav_Logo = ({ownerImg, ownerName}) => {
  return (
    <button onClick={() => scroll.scrollToTop({ duration: 300 })}>
      <div className="flex items-center ml-16">
        <img
          className="w-10 h-10 mr-2 rounded-full"
          src={ownerImg}
          alt={ownerName}
        />
        <span>{ownerName.toUpperCase()}</span>
      </div>
    </button>
  );
};

export default Nav_Logo;
