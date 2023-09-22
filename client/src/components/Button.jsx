const Button = ({ parent, text, type, icon, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`px-2 py-1 text-white text-center bg-myacc hover:bg-indigo-600 rounded-lg mt-6 duration-300 mx-auto shadow-sm shadow-black ${parent === "form" ? "px-4 py-2" : ""} dark:shadow-white`} 
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
