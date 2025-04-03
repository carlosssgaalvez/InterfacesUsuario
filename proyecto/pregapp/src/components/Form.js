function Form({ label, placeholder, onChange }) {
    const [value, setValue] = useState("");
  
    function handleChange(e) {
      setValue(e.target.value);
      if (onChange) {
        onChange(e.target.value);
      }
    }
  
    return (
      <div className="flex flex-col space-y-2">
        {label && <label className="text-gray-700 font-medium">{label}</label>}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  
  export default Form;