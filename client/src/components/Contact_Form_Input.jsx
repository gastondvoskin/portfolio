const Contact_Form_Input = ({ Element, name, labelText, value, onChange, placeholder }) => {
  const sharedAttributes = {
    value,
    onChange,
    className: `w-full mt-1 px-2 py-1 bg-white text-black text-sm border border-gray-300 border-opacity-50 rounded-sm shadow-sm dark:bg-mybg1d dark:text-white dark:border-gray-500 ${Element === "input" ? "" : ""} md:text-base`,
    id: name,
    name,
    placeholder,
    "aria-label": name,
    required: true,
  };

  return (
    <div className={`mb-3 ${Element === "textarea" ? "mt-4" : ""}`}>
      <label className="text-base text-black dark:text-white md:text-lg" htmlFor={name}>
        {labelText}
      </label>
      {Element === "input" ? (
        <input {...sharedAttributes} type="text" />
      ) : (
        <textarea {...sharedAttributes} rows={3} />
      )}
    </div>
  );
};

export default Contact_Form_Input;
