function InputText({ className,id, placeholder, value, onChange }) {
  return ( <input id={id} type="text" placeholder={placeholder} className={className} onChange={onChange} value={value}  />
  );
}

export default InputText;