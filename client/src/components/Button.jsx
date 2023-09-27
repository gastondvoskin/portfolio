const Button = ({ parent, text, type, Icon, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`flex items-center mt-6 mx-auto px-2 py-1 text-base text-center bg-myacc text-white hover:bg-myacchover rounded-sm duration-300 shadow-sm shadow-black dark:shadow-white lg:px-4 lg:py-2 lg:text-xl ${parent === "form" ? "mt-2 mb-3 lg:mb-0" : ""} dark:hover:bg-myaccdhover`} 
    >
      {Icon && <span className="mr-2">{<Icon size={18} />}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;