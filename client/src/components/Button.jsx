const Button = ({ parent, text, type, icon, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`mt-6 mx-auto px-2 py-1 text-sm text-center bg-myacc text-white hover:bg-indigo-600 rounded-sm duration-300 shadow-sm shadow-black ${parent === "form" ? "px-4 py-2" : ""} dark:shadow-white md:text-base`} 
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
