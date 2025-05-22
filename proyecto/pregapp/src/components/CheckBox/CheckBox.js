function CheckBox({ className, id, checked, onChange }) {
  return (
      <input type="checkbox" id={id} className={className} checked={checked} onChange={onChange}/>
  );
}

export default CheckBox;