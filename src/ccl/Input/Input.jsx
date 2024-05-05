import "./Input.css";

export default function Input({ placeholder, onChange }) {
  const onChangeHandler = (e) => {
    onChange && onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChangeHandler}
      className="input-root"
    />
  );
}
