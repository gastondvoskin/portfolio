const Button = ({ parent, text, type, icon, onClickHandler }) => {
  console.log("Parent:", parent);
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`flex items-center mt-6 mx-auto px-2 py-1 text-base text-center bg-myacc text-white hover:bg-indigo-600 rounded-sm duration-300 shadow-sm shadow-black dark:shadow-white lg:px-4 lg:py-2 lg:text-xl ${parent === "form" ? "mt-2 mb-3 lg:mb-0" : ""} `} 
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;