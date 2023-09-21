const Form_Input = ({name, labelText, value, onChange, placeHolder}) => {
  return (
    <div className="mb-4">
      <label
        className="block mb-1 text-lg text-black dark:text-white"
        htmlFor={name}
      >
        {labelText}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="w-full px-5 py-2 bg-white text-black text-md border border-gray-300 border-opacity-50 rounded-md shadow-sm dark:bg-mybg1d dark:text-white dark:border-gray-500"
        type="text"
        id={name}
        name={name}
        placeholder={placeHolder}
        aria-label={name}
        required
      />
    </div>
  );
};

export default Form_Input;
