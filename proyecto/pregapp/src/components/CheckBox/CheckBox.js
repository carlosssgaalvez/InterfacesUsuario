function CheckBox({ className, id, checked, onChange }) {
  return (
    <label>
      <input type="checkbox" id={id} className={className} checked={checked} onChange={onChange}/>
    </label>
  );
}

export default CheckBox;