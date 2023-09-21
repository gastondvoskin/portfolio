const Form_Input = ({ Element, name, labelText, value, onChange, placeholder }) => {
  const sharedAttributes = {
    value,
    onChange,
    className: "w-full px-5 py-2 bg-white text-black text-md border border-gray-300 border-opacity-50 rounded-md shadow-sm dark:bg-mybg1d dark:text-white dark:border-gray-500",
    id: name,
    name,
    placeholder,
    "aria-label": name,
    required: true,
  };

  return (
    <div className={`mb-4 ${Element === "textarea" ? "mt-10" : ""}`}>
      <label className="mb-1 text-lg text-black dark:text-white" htmlFor={name}>
        {labelText}
      </label>
      {Element === "input" ? (
        <input {...sharedAttributes} type="text" />
      ) : (
        <textarea {...sharedAttributes} rows={5} />
      )}
    </div>
  );
};

export default Form_Input;
