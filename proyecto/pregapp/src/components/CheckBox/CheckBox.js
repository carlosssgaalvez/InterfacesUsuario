import { speak } from '../../utils/speech';

function CheckBox({ className, id, checked, onChange, labelText }) {
  const handleFocus = () => {
    speak(`${labelText}. ${checked ? 'Marcado' : 'No marcado'}`);
  };

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    speak(`${labelText}. ${newChecked ? 'Marcado' : 'No marcado'}`);
    onChange(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Simula el cambio del checkbox
      const fakeEvent = { target: { checked: !checked } };
      speak(`${labelText}. ${!checked ? 'Marcado' : 'No marcado'}`);
      onChange(fakeEvent);
    }
  };

  return (
    <input
      type="checkbox"
      id={id}
      className={className}
      checked={checked}
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    />
  );
}

export default CheckBox;
