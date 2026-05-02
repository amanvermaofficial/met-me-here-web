const TextAreaField = ({
  label,
  name,
  placeholder,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <textarea
        name={name}
        placeholder={placeholder}
        rows={4}
        className="
          w-full px-4 py-2.5 
          border border-gray-200 
          rounded-lg 
          bg-gray-50
          focus:outline-none 
          focus:ring-2 focus:ring-blue-500 
          focus:bg-white
          transition
        "
      />
    </div>
  );
};

export default TextAreaField;