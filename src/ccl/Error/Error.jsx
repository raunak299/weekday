import "./Error.css";

export default function Error({ message }) {
  return (
    <div className="error-root">
      <h2>{message}</h2>
    </div>
  );
}
