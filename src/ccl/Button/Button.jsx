import "./Button.css";

export default function Button(props) {
  const { label, onClick, size = "fullWidth", color = "primary", icon } = props;

  return (
    <button
      onClick={onClick}
      className={` button button-${color} button-${size}`}
    >
      {icon && <span className="material-icons">{icon}</span>}
      {label}
    </button>
  );
}
