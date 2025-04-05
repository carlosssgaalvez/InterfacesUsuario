function InputText({ className, placeholder, value, onChange }) {
  return ( <input type="text" placeholder={placeholder} className={className} onChange={onChange} value={value}  />
  );
}

export default InputText;