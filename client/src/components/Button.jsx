const Button = ({ parent, text, type, icon, onClickHandler }) => {

  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`px-2 py-1 text-white text-center bg-myacc hover:bg-indigo-600 rounded-lg mt-6 duration-300 mx-auto ${parent === "form" ? "px-6 py-3" : ""}`} 
    >
      {icon} <span className="ml-2">{text}</span>
    </button>
  );
};

export default Button;
