function InputText({ className,id, placeholder, value, onChange,type }) {
  return ( <input id={id} placeholder={placeholder} className={className} onChange={onChange} value={value} type={type}  />
  );
}

export default InputText;